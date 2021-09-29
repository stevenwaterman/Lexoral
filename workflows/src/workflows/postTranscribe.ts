import { Workflow } from "../components/workflow.js";
import assert2xx from "../components/assert2xx.js";
import { checkedFunctionStep } from "../components/cloudFunction.js";
import { variables } from "../components/variables.js";

export const postTranscribe: Workflow = {
  main: {
    params: ['config'],
    steps: [
      ...variables("vars", {
        user_id: '${config.userId}',
        transcript_id: '${config.transcriptId}',
        exec_id: '${sys.get_env("GOOGLE_CLOUD_WORKFLOW_EXECUTION_ID")}',
        function_root: '${"https://europe-west2-" + sys.get_env("GOOGLE_CLOUD_PROJECT_ID") + ".cloudfunctions.net/"}'
      }),
      ...checkedFunctionStep("align"),
      ...checkedFunctionStep("adjust"),
      {
        success: {
          return: 'SUCCESS'
        }
      }
    ]
  },
  ...assert2xx
}
