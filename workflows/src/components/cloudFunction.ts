import { StepWrapper, HttpStep, SubWorkflowStep, LogStep } from "./workflow.js";

type CloudFunctionNames = "adjust" | "align" | "charge_credit" | "transcode_envelope" | "transcribe"

export function checkedFunctionStepNamed(stepName: string, functionName: CloudFunctionNames): [StepWrapper<LogStep>, StepWrapper<HttpStep>, StepWrapper<SubWorkflowStep>] {
  const logStep: LogStep = {
    call: "sys.log",
    args: {
      text: `${stepName} started`
    }
  }

  const httpStep: HttpStep = {
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
  };

  const assertStep: SubWorkflowStep = {
    call: 'assert_2xx',
    args: {
      response: '${' + stepName + '_response}'
    }
  };

  return [
    {
      [`${stepName}_log`]: logStep
    }, {
      [stepName]: httpStep
    }, {
      [`${stepName}_check`]: assertStep
    }
  ]
}

export function checkedFunctionStep(functionName: CloudFunctionNames): [StepWrapper<LogStep>, StepWrapper<HttpStep>, StepWrapper<SubWorkflowStep>] {
  return checkedFunctionStepNamed(functionName, functionName);
}
