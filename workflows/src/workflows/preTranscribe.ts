import { Workflow, TryCatchStep } from "../types/workflow.js";
import { userTranscriptConfigVars } from "../components/variables.js";
import { logWorkflow, setTranscriptStage } from "../components/firestore.js";
import { subworkflows, callSub } from "../subworkflows/subworkflows.js";

const tryCatchStep: TryCatchStep = {
  try: {
    steps: [
      { vars: userTranscriptConfigVars() },
      { checkStage: callSub.assertTranscriptStage("uploading") },
      { setStage: setTranscriptStage("processing") },
      { logWorkflow: logWorkflow("pre_transcribe") },
      { envelope: callSub.cloudFunction("transcode_envelope") },
      { charge: callSub.cloudFunction("charge_credit") },
      { envelope: callSub.cloudFunction("transcode_playback") },
      { transcribe: callSub.cloudFunction("transcribe") },
      { success: {
          return: 'SUCCESS'
        }
      }
    ]
  },
  except: {
    as: "e",
    steps: [
      { errorStage: setTranscriptStage("error") },
      { log: {
        call: "sys.log",
        args: {
          text: '${"error: " + json.encode_to_string(e)}'
        }
      }},
      { raiseError: {
        raise: "error"
      }}
    ]
  }
}

export const preTranscribe: Workflow = {
  main: {
    params: ["config"],
    steps: [
      { tryCatch: tryCatchStep }
    ]
  },
  ...subworkflows
}
