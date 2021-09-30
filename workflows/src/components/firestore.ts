import { WriteDocumentStep, WriteUpdate } from "../types/firestore";

export function logWorkflow(workflowName: string): WriteDocumentStep {
  const write: WriteUpdate = {
    update: {
      name: '${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)/documents/users/" + user_id + "/transcripts/" + transcript_id + "/workflow/" + sys.get_env("GOOGLE_CLOUD_WORKFLOW_EXECUTION_ID")}',
      fields: {
        workflow: {
          stringValue: workflowName
        }
      }
    },
    updateTransforms: [
      {
        fieldPath: "timestamp",
        setToServerValue: "REQUEST_TIME"
      }
    ]
  }

  return {
    call: "googleapis.firestore.v1.projects.databases.documents.batchWrite",
    args: {
      database: '${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)"}',
      body: {
        writes: [ write ]
      }
    }
  }
}

export type TranscriptStages = "uploading" | "processing" | "ready" | "error";

export function setTranscriptStage(stage: TranscriptStages): WriteDocumentStep {
  const write: WriteUpdate = {
    update: {
      name: '${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)/documents/users/" + user_id + "/transcripts/" + transcript_id}',
      fields: {
        stage: {
          stringValue: stage
        }
      }
    },
    updateMask: {
      fieldPaths: [
        "stage"
      ]
    }
  }

  return {
    call: "googleapis.firestore.v1.projects.databases.documents.batchWrite",
    args: {
      database: '${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)"}',
      body: {
        writes: [ write ]
      }
    }
  }
}
