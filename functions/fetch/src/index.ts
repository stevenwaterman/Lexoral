import { Storage } from "@google-cloud/storage";
import type { Request, Response } from "express";
import * as admin from "firebase-admin";

export function run(req: Request, res: Response) {
  console.log("invoked")

  const authorization = req.headers.authorization;
  if (authorization === undefined) {
    res.sendStatus(401);
    return;
  }
  if (!authorization.startsWith("Bearer ")) {
    res.sendStatus(400);
    return;
  }
  const token = authorization.split("Bearer ")[1];
  if (token === undefined) {
    res.sendStatus(400);
    return;
  }
  
  admin
    .initializeApp()
    .auth()
    .verifyIdToken(token)
    .then(decodedToken => {
      console.log(decodedToken);
      sendFile(res);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(403);
    })
}

async function sendFile(res: Response) {
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