import { Request, Response, NextFunction } from "express";
import admin from "firebase-admin";

async function checkInternal(req: Request): Promise<admin.auth.DecodedIdToken> {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new Error("Missing authorization header");
  if (!authHeader.startsWith("Bearer ")) throw new Error("authorization header does not start with 'Bearer '");
  const idToken = authHeader.split('Bearer ')[1];
  if (!idToken) throw new Error("idToken not defined");
  return admin.auth().verifyIdToken(idToken);
}

export async function check(req: Request, res: Response): Promise<admin.auth.DecodedIdToken> {
  return checkInternal(req)
    .catch(err => {
      res.sendStatus(401)
      throw err;
    });
}
