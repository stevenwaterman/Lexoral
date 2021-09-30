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

export const preTranscribe: Workflow = {
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
    params: ["config"],
    steps: [
      { vars: userTranscriptConfigVars() },
      { checkStage: callSub.assertTranscriptStage("uploading") },
      { setStage: callSub.assertTranscriptStage("processing") },
      { logWorkflow: logWorkflow("pre_transcribe") },
      { transcode: callSub.cloudFunction("transcode_envelope") },
      { charge: callSub.cloudFunction("charge_credit") },
      { transcribe: callSub.cloudFunction("transcribe") },
      { success: {
          return: 'SUCCESS'
        }
      }
    ]
  },
  ...subworkflows
}
