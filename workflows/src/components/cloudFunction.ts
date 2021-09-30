import { StepWrapper, HttpStep, SubWorkflowStep } from "./workflow.js";

type CloudFunctionNames = "adjust" | "align" | "charge_credit" | "transcode_envelope" | "transcribe"

export function checkedFunctionStepNamed(stepName: string, functionName: CloudFunctionNames): [StepWrapper<HttpStep>, StepWrapper<SubWorkflowStep>] {
  return [
    {
      [stepName]: {
        call: 'http.get',
        args: {
          url: '${function_root + "' + functionName + '"}',
          query: {
            user: '${user_id}',
            transcript: '${transcript_id}'
          },
          auth: {
            type: 'OIDC'
          }
        },
        result: stepName + '_response'
      }
    },
    {
      [stepName + "_check"]: {
        call: 'assert_2xx',
        args: {
          response: '${' + stepName + '_response}'
        }
      }
    }
  ]
}

export function checkedFunctionStep(functionName: CloudFunctionNames): [StepWrapper<HttpStep>, StepWrapper<SubWorkflowStep>] {
  return checkedFunctionStepNamed(functionName, functionName);
}
