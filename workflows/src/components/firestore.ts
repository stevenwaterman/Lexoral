import { WriteDocumentStep } from "../types";

export function logWorkflow(workflowName: string): WriteDocumentStep {
  return {
    call: "googleapis.firestore.v1.projects.databases.documents.patch",
    args: {
      name: '${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)/documents/users/" + user_id + "/transcripts/" + transcript_id + "/workflow/" + sys.get_env("GOOGLE_CLOUD_WORKFLOW_EXECUTION_ID")}',
      body: {
        fields: {
          timestamp: {
            timestampValue: new Date()
          },
          workflow: {
            stringValue: workflowName
          }
        }
      }
    }
  }
}

export type TranscriptStages = "uploading" | "processing" | "ready" | "error";

export function setTranscriptStage(stage: TranscriptStages): WriteDocumentStep {
  return {
    call: "googleapis.firestore.v1.projects.databases.documents.patch",
    args: {
      name: '${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)/documents/users/" + user_id + "/transcripts/" + transcript_id}',
      body: {
        fields: {
          stage: {
            stringValue: stage
          }
        }
      },
      updateMask: {
        fieldPaths: "stage"
      }
    }
  }
}
