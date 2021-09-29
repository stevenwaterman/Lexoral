import { StepWrapper, HttpStep, SubWorkflowStep } from "./workflow.js";

export function checkedFunctionStep(stepName: string, functionName: string = stepName): [StepWrapper<HttpStep>, StepWrapper<SubWorkflowStep>] {
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
          status: '${' + stepName + '_response.code}'
        }
      }
    }
  ]
}
