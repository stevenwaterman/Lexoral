import utils from "lexoral-utils";
import { Storage } from "@google-cloud/storage";

type Context = {
  params: {
    transcriptId: string;
    userId: string;
  }
};
export async function run(event: any, context: Context) { 
  const { transcriptId, userId } = context.params;
  await utils.storage.deleteFromAll(storage, userId, transcriptId);
}

const storage = new Storage();
