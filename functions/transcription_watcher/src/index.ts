import utils from "lexoral-utils";
import { ExecutionsClient } from "@google-cloud/workflows";

export async function run({ name }: { name: string }) {
  const [userId, transcriptId] = name.split("_");
  if (userId === undefined || transcriptId === undefined) throw new Error("File name formatted wrong: " + name);

  const projectId = process.env["PROJECT_ID"];
  if (projectId === undefined) throw new Error("PROJECT_ID env var not set");

  const [execution] = await workflow.createExecution({
    parent: workflow.workflowPath(projectId, "europe-west4", "post_transcribe"),
    execution: {
      argument: JSON.stringify({ userId, transcriptId })
    }
  });
  console.log("Executing workflow", execution.name);
}

const workflow = new ExecutionsClient();
