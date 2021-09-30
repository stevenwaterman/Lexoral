import { SubWorkflow } from "../types/workflow.js";
import { SubWorkflowStep } from "./subworkflows.js";

const assert2xxSWF: SubWorkflow = {
  params: ['response'],
  steps: [
    {
      compare: {
        switch: [
          {
            condition: '${response.code >= 200 and response.code < 300}',
            next: 'end'
          }
        ]
      },
    },
    {
      fail: {
        raise: '${"Expected 2xx http response, actually " + json.encode_to_string(response)}'
      }
    }
  ]
};

function callAssert2xx(responseVar: string): SubWorkflowStep {
  return {
    call: 'assert_2xx',
    args: {
      response: '${' + responseVar + '}'
    }
  } as any;
}

export default {
  swf: {
    assert_2xx: assert2xxSWF
  },
  call: callAssert2xx
}
