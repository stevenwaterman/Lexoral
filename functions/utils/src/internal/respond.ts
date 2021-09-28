import { Response } from "express";

export function respondError(res: Response, status: number, error: string): Error {
  res.status(status).send(error);
  return new Error(`Responding with status ${status} - ${error}`);
}
