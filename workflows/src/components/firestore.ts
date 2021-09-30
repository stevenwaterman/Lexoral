import { StepWrapper, WriteDocumentStep, ReadDocumentStep, SubWorkflow, SubWorkflowStep } from "../types";
import { Timestamp } from "@google-cloud/firestore";

export function logWorkflow(workflowName: string): WriteDocumentStep {
  return {
    call: "googleapis.firestore.v1.projects.databases.documents.patch",
    args: {
      name: '${"projects/" + project_id + "/databases/(default)/documents/users/" + user_id + "/transcripts/" + transcript_id + "/workflow/" + sys.get_env("GOOGLE_CLOUD_WORKFLOW_EXECUTION_ID")}',
      body: {
        fields: {
          timestamp: {
            timestampValue: Timestamp.now()
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
      name: '${"projects/" + project_id + "/databases/(default)/documents/users/" + user_id + "/transcripts/" + transcript_id}',
      body: {
        fields: {
          stage: {
            stringValue: stage
          }
        }
      }
    }
  }
}
