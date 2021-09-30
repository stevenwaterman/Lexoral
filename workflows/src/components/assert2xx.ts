import { SubWorkflow } from "./workflow.js";

const assert2xx: SubWorkflow = {
  params: ['status'],
  steps: [
    {
      compare: {
        switch: [
          {
            condition: '${status >= 200 and status < 300}',
            next: 'end'
          }
        ]
      },
    },
    {
      fail: {
        raise: '${"Expected 2xx http response, actually " + string(status)}'
      }
    }
  ]
};

export default {
  assert_2xx: assert2xx
};
