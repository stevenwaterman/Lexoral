import { SubWorkflow } from "./workflow.js";

const assert2xx: SubWorkflow = {
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

export default {
  assert_2xx: assert2xx
};
