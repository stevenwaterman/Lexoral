import { RequestHandler, Express } from "express";
import corsFactory from "cors";
import express from "express";

export function get(handler: RequestHandler): Express {
  const cors = corsFactory({ origin: true });
  const app = express().use(cors);
  app.get("*", (req, res, next) => {
    try {
      handler(req, res, next)
    } catch(err) {
      if (res.writableEnded) {
        console.info("Handled error: " + err);
      } else {
        console.error("Unhandled error: " + err);
        res.sendStatus(500);
      }
    }
  });
  return app;
}
