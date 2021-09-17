import { Storage } from "@google-cloud/storage";
import type { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";
import corsFactory from "cors";
import express from "express";

type HydratedRequest = Request & { user?: admin.auth.DecodedIdToken };

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
async function validateFirebaseIdToken(
  req: HydratedRequest, 
  res: Response,
  next: NextFunction
) {
  console.log('Check if request is authorized with Firebase ID token');

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
    console.log('Found "Authorization" header');
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if(req.cookies) {
    console.log('Found "__session" cookie');
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    // No cookie
    res.status(403).send('Unauthorized');
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    console.log('ID Token correctly decoded', decodedIdToken);
    console.log("Decoded user:", decodedIdToken.email)
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    console.error('Error while verifying Firebase ID token:', error);
    res.status(403).send('Unauthorized');
    return;
  }
};

function sendFile(res: Response) {
  res.writeHead(200, {
    "Content-Type": "text/json"
  });

  new Storage()
    .bucket(`${process.env["PROJECT_ID"]}-transcripts`)
    .file("temp.mp3.json")
    .createReadStream()
    .on("error", err => console.log(err))
    .on("end", () => {})
    .pipe(res);
}

function handleRequest(req: HydratedRequest, res: Response) {
  console.log("Request handler hit");
  sendFile(res);
}

admin.initializeApp();
const cors = corsFactory({ origin: true });
const app = express().use(cors).use(validateFirebaseIdToken);
app.get("*", handleRequest);

export const run = app;
