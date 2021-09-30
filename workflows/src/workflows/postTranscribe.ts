import { Workflow, SubWorkflowStep } from "../types.js";
import { userTranscriptConfigVars } from "../components/variables.js";
import { logWorkflow, setTranscriptStage } from "../components/firestore.js";
import { subworkflows, callSub } from "../subworkflows/subworkflows.js";

const callInner: SubWorkflowStep = {
  call: "inner",
  args: {
    config: '${config}'
  }
}

export const postTranscribe: Workflow = {
  main: {
    params: ["config"],
    try: {
      steps: [
        { callInner }
      ]
    },
    except: {
      "as": "e",
      steps: [
        { errorStage: setTranscriptStage("error") },
        { raiseError: {
          raise: '${e}'
        }}
      ]
    }
  },
  inner: {
    params: ['config'],
    steps: [
      { vars: userTranscriptConfigVars() },
      { checkStage: callSub.assertTranscriptStage("processing") },
      { logWorkflow: logWorkflow("post_transcribe") },
      { align: callSub.cloudFunction("align") },
      { adjust: callSub.cloudFunction("adjust") },
      { ready: setTranscriptStage("ready") },
      {
        success: {
          return: 'SUCCESS'
        }
      }
    ]
  },
  ...subworkflows
}
