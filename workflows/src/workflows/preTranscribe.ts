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
      { transcode_transcription: callSub.cloudFunction("transcode_transcription") },
      { get_metadata: callSub.cloudFunction("get_metadata") },
      { charge: callSub.cloudFunction("charge_credit") },
      { playback: callSub.cloudFunction("transcode_playback") },
      { envelope: callSub.cloudFunction("transcode_envelope") },
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
