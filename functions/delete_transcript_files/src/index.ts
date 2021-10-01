import utils from "lexoral-utils";
import { Storage } from "@google-cloud/storage";

export async function run(event: any, context: any) {
  const resource = context.resource;
  // log out the resource string that triggered the function
  console.log('Function triggered by change to: ' +  resource);
  // now log the full event object
  console.log(JSON.stringify(event));
}

const storage = new Storage();
