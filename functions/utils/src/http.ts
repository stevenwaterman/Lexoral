import { Express } from "express";
import corsFactory from "cors";
import express, { json, Request, Response } from "express";

type Handler = (req: Request, res: Response) => Promise<void>;

function wrap(handler: Handler): Handler {
  return async (req, res) => {
    handler(req, res)
      .catch(err => {
        if (res.writableEnded) {
          console.info("Handled error: " + JSON.stringify(err));
        } else {
          console.error("Unhandled error: " + JSON.stringify(err));
          console.error(err.stack);
          res.sendStatus(500);
        }
      })
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
