import { Express } from "express";
import corsFactory from "cors";
import express, { json, Request, Response } from "express";

type Handler = (req: Request, res: Response) => Promise<void>;

function handleError(res: Response, err: any) {
  if (res.writableEnded) {
    console.info("Handled error: " + JSON.stringify(err));
  } else {
    console.error("Unhandled error: " + JSON.stringify(err));
    console.error(err.stack);
    res.sendStatus(500);
  }
}

function wrap(handler: Handler): Handler {
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (err: any) {
      handleError(res, err);
    }
  };
}

export function get(handler: Handler): Express {
  const cors = corsFactory({ origin: true });
  const app = express().use(cors);
  app.get("*", wrap(handler));
  return app;
}

export function post(handler: Handler): Express {
  const cors = corsFactory({ origin: true });
  const app = express().use(cors).use(json());
  app.options("*", cors);
  app.post("*", wrap(handler));
  return app;
}

export function unparsedPost(handler: Handler): Express {
  const cors = corsFactory({ origin: true });
  const app = express().use(cors);
  app.options("*", cors);
  app.post("*", wrap(handler));
  return app;
}

export function put(handler: Handler): Express {
  const cors = corsFactory({ origin: true });
  const app = express().use(cors).use(json());
  app.options("*", cors);
  app.put("*", wrap(handler));
  return app;
}

export function del(handler: Handler): Express {
  const cors = corsFactory({ origin: true });
  const app = express().use(cors).use(json());
  app.options("*", cors);
  app.delete("*", wrap(handler));
  return app;
}
