import { StepWrapper, WriteDocumentStep } from "./workflow";
import { Timestamp } from "@google-cloud/firestore";

export function logWorkflow(workflowName: string): [StepWrapper<WriteDocumentStep>] {
  const write: WriteDocumentStep = {
    call: "googleapis.firestore.v1.projects.databases.documents.patch",
    args: {
      name: '${"projects/" + project_id + "/databases/(default)/documents/users/" + user_id + "/transcripts/" + transcript_id + "/workflow/' + workflowName + '"}',
      body: {
        fields: {
          timestamp: {
            timestampValue: Timestamp.now()
          },
          execId: {
            stringValue: '${exec_id}'
          }
        }
      }
    }
  }

  return [
    {
      log_workflow: write
    }
  ];
}
