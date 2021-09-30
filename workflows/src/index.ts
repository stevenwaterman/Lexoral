import { preTranscribe } from "./workflows/preTranscribe.js";
import { postTranscribe } from "./workflows/postTranscribe.js";
import fs from "fs";
import yaml from "yaml";

fs.mkdirSync("synth", { recursive: true });

const files = [
  { name: "pre_transcribe", data: preTranscribe },
  { name: "post_transcribe", data: postTranscribe }
];

const promises = files.map(({ name, data }) => fs.promises.writeFile(`synth/${name}.yml`, yaml.stringify(data)));
await Promise.all(promises);
