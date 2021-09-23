import type { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import corsFactory from "cors";
import express from "express";

type HydratedRequest = Request & { user: admin.auth.DecodedIdToken };
type HydratedRequestInput = Request & { user?: admin.auth.DecodedIdToken };

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
async function validateFirebaseIdToken(
  req: HydratedRequestInput, 
  res: Response,
  next: NextFunction
) {
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
      !(req.cookies && req.cookies.__session)) {
    console.error(
      'No Firebase ID token was passed as a Bearer token in the Authorization header.',
      'Make sure you authorize your request by providing the following HTTP header:',
      'Authorization: Bearer <Firebase ID Token>',
      'or by passing a "__session" cookie.'
    );
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if(req.cookies) {
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    // No cookie
    res.status(403).send('Unauthorized');
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    console.error('Error while verifying Firebase ID token:', error);
    res.status(403).send('Unauthorized');
    return;
  }
}

type PatchedSectionProps = {
  text: string;
  endParagraph: boolean;
}
type SectionPatch = Partial<PatchedSectionProps>;
type Patch = Record<number, SectionPatch>;
type RequestData = Record<number, Patch | null>;

async function handleRequest(reqInput: HydratedRequestInput, res: Response) {
  const req = reqInput as HydratedRequest;

  const userId = req.user.uid;
  const transcriptId: string | undefined = reqInput.query["transcript"]?.toString();
  if (!transcriptId) {
    res.status(400).send("Missing 'transcript' query param");
    return;
  }

  const transcriptDoc = store.doc(`users/${userId}/transcripts/${transcriptId}`);
  const transcript = await transcriptDoc.get();
  if (!transcript.exists) {
    res.status(404).send("Could not find transcript document " + userId + "/" + transcriptId);
    return;
  }

  const transcriptStage = transcript.get("stage");
  if (transcriptStage !== "ready") {
    res.status(400).send("Transcript is not ready. Was actually " + transcriptStage);
    return;
  }

  const data: RequestData = req.body;

  const patchesCollection = store.collection(`users/${userId}/transcripts/${transcriptId}/patches`);
  const writes = Object.entries(data).map(([idx, patch]) => {
    const docId = idx.padStart(10, "0");
    const docRef = patchesCollection.doc(docId);
    if (patch === null) {
      return docRef.delete();
    } else {
      return docRef.set({
        creationTime: admin.firestore.FieldValue.serverTimestamp(),
        ...patch
      });
    }
  })
  await Promise.all(writes);

  res.sendStatus(201);
}

const store = admin.initializeApp().firestore();

const cors = corsFactory({ origin: true });
const app = express().use(cors).use(validateFirebaseIdToken).use(express.json());
app.put("*", handleRequest);

export const run = app;
