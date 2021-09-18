import type { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import corsFactory from "cors";
import express from "express";
import multer from "multer";
import {storageEngine} from "multer-cloud-storage";

type HydratedRequestInput = Request & { user?: admin.auth.DecodedIdToken };
type HydratedRequest = Request & { user: admin.auth.DecodedIdToken };

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
};

async function preUpload(reqInput: HydratedRequestInput, res: Response, next: () => void) {
  const req = reqInput as HydratedRequest;
  // TODO check if 0 credit, reject early

  const name: string | undefined = req.body["name"];
  if (name === undefined) {
    res.status(400).send("Missing name");
  }

  const file = req.file;
  if (file === undefined) {
    res.status(400).send("Missing file");
    return;
  }

  console.log(name, file);
  res.sendStatus(200);

  const collection = db.collection(`users/${req.user.uid}/transcriptions`);
  const stored = await collection.add({ stage: "pre-upload", name });
  const audioId = stored.id;
  (req as any)["audioId"] = audioId;
  console.log("Created audio id", audioId);
  next();
}

async function postUpload(reqInput: HydratedRequestInput, res: Response, next: () => void) {
  const req = reqInput as HydratedRequest;
  console.log("Finished writing file");
  const audioId: string = (req as any)["audioId"];
  await db.doc(`users/${req.user.uid}/transcriptions/${audioId}`).update({ stage: "pre-transcode" })
  console.log("Updated firestore");

  res.sendStatus(201);
  console.log("Done");
}

function getFilename(req: Request, file: File, cb: (err: string | null, filename: string) => void) {
  cb(null, (req as any)["audioId"]);
}

const storage = storageEngine({
  projectId: process.env["PROJECT_ID"],
  bucket: `${process.env["PROJECT_ID"]}-raw-audio`,
  filename: getFilename,
  uniformBucketLevelAccess: true
})

admin.initializeApp();
const db = admin.firestore();
const cors = corsFactory({ origin: true });
const app = express()
  .use(cors)
  .use(validateFirebaseIdToken)

const upload = multer({storage}).single("file");

app.post("*", preUpload, upload, postUpload);

export const run = app;
