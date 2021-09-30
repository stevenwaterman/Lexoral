import { Workflow, TryCatchStep } from "../types.js";
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
      { raiseError: {
        raise: '${e}'
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
