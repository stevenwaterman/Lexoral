import { Storage } from "@google-cloud/storage";
import type { Request, Response } from "express";

export function run(req: Request, res: Response) {
  console.log("invoked")
  sendFile(res);
  console.log("done")
}

async function sendFile(res: Response) {
  res.writeHead(200, {
    "Content-Type": "text/json"
  });

  new Storage()
    .bucket(`${process.env.PROJECT_ID}-transcripts`)
    .file("temp.mp3.json")
    .createReadStream()
    .on("error", err => console.log(err))
    .on("end", () => {})
    .pipe(res);
}