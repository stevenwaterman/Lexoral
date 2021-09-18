import { Storage } from "@google-cloud/storage";
import type { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import corsFactory from "cors";
import express from "express";
import multer from "multer";

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

async function writeFile(req: HydratedRequest, audioId: string) {
  return new Promise<void>(resolve => {
    const writeStream = new Storage()
      .bucket(`${process.env["PROJECT_ID"]}-raw-audio`)
      .file(audioId)
      .createWriteStream()
      .on("end", resolve);
    req.pipe(writeStream);
  })
}

async function handleRequest(reqInput: HydratedRequestInput, res: Response) {
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

  // const collection = db.collection(`users/${req.user.uid}/transcriptions`)
  // const audioData = {
  //   stage: "pre-upload",
  //   name: "audio"
  // }
  // const stored = await collection.add(audioData)
  // const audioId = stored.id;
  // console.log("Created audio id", audioId);

  // await writeFile(req, audioId);
  // console.log("Finished writing file")
  // await stored.update({ stage: "pre-transcode" });

  // res.sendStatus(201);
  // console.log("Done");
}

admin.initializeApp();
const db = admin.firestore();
const cors = corsFactory({ origin: true });
const upload = multer().single("file");
const app = express()
  .use(cors)
  .use(validateFirebaseIdToken)
  .use(upload);
app.post("*", multer, handleRequest);

export const run = app;
