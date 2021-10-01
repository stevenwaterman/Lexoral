import { RequestHandler, Express } from "express";
import corsFactory from "cors";
import express, { json } from "express";

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

export function post(handler: RequestHandler): Express {
  const cors = corsFactory({ origin: true });
  const app = express().use(cors).use(json());
  app.options("*", cors);
  app.post("*", (req, res, next) => {
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

export function put(handler: RequestHandler): Express {
  const cors = corsFactory({ origin: true });
  const app = express().use(cors).use(json());
  app.options("*", cors);
  app.put("*", (req, res, next) => {
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

export function del(handler: RequestHandler): Express {
  const cors = corsFactory({ origin: true });
  const app = express().use(cors).use(json());
  app.options("*", cors);
  app.delete("*", (req, res, next) => {
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
