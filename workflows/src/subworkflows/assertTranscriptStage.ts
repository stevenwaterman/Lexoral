import { SubWorkflow, ReadDocumentStep } from "../types/workflow";
import { TranscriptStages } from "../components/firestore";
import { SubWorkflowStep } from "./subworkflows";

const getTranscript: ReadDocumentStep = {
  call: "googleapis.firestore.v1.projects.databases.documents.get",
  args: {
    name: '${"projects/" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + "/databases/(default)/documents/users/" + user_id + "/transcripts/" + transcript_id}',
  },
  result: "transcript_document"
}

const assertTranscriptStageSWF: SubWorkflow = {
  params: [
    "user_id", 
    "transcript_id", 
    "stage"
  ],
  steps: [
    {
      read: getTranscript
    },
    {
      compare: {
        switch: [
          {
            condition: '${transcript_document.fields.stage.stringValue == stage}',
            next: 'end'
          }
        ]
      },
    },
    {
      fail: {
        raise: '${"Expected stage " + stage + ", actually " + transcript_document.fields.stage.stringValue}'
      }
    }
  ]
};

function callAssertTranscriptStage(stage: TranscriptStages): SubWorkflowStep {
  return {
    call: 'assert_transcript_stage',
    args: {
      user_id: '${user_id}',
      transcript_id: '${transcript_id}',
      stage
    }
  };
}

export default {
  swf: {
    assert_transcript_stage: assertTranscriptStageSWF
  },
  call: callAssertTranscriptStage
}
