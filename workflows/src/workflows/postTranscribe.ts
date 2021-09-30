import { Workflow, TryCatchStep } from "../types.js";
import { userTranscriptConfigVars } from "../components/variables.js";
import { logWorkflow, setTranscriptStage } from "../components/firestore.js";
import { subworkflows, callSub } from "../subworkflows/subworkflows.js";

const tryCatchStep: TryCatchStep = {
  try: {
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

export const postTranscribe: Workflow = {
  main: {
    params: ["config"],
    steps: [
      { tryCatch: tryCatchStep }
    ]
  },
  ...subworkflows
}
