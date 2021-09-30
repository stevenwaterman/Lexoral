import { HttpStep, LogStep, Step, SubWorkflow } from "../types/workflow.js";
import { SubWorkflowStep } from "./subworkflows.js";
import assert2xx from "./assert2xx.js";

const logStep: LogStep = {
  call: "sys.log",
  args: {
    text: '${function_name + " started"}'
  }
};

const httpStep: HttpStep = {
  call: 'http.get',
  args: {
    url: '${"https://europe-west2-" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + ".cloudfunctions.net/" + function_name}',
    query: {
      user: '${user_id}',
      transcript: '${transcript_id}'
    },
    auth: {
      type: 'OIDC'
    }
  },
  result: 'function_response'
};

const cloudFunctionSWF: SubWorkflow = {
  params: [
    "user_id",
    "transcript_id",
    "function_name"
  ],
  steps: [
    { log: logStep },
    { call: httpStep },
    { check: assert2xx.call("function_response") }
  ]
};

type CloudFunctionNames = "adjust" | "align" | "charge_credit" | "transcode_envelope" | "transcribe";
function callCloudFunction(name: CloudFunctionNames): SubWorkflowStep {
  return {
    call: 'cloud_function',
    args: {
      user_id: '${user_id}',
      transcript_id: '${transcript_id}',
      function_name: name
    }
  };
}

export default {
  swf: {
    cloud_function: cloudFunctionSWF
  },
  call: callCloudFunction
}
