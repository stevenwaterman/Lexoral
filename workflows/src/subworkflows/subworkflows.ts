import assert2xx from "./assert2xx.js";
import assertTranscriptStage from "./assertTranscriptStage.js";
import cloudFunction from "./cloudFunction.js";
import { BaseStep, Step, SubWorkflow } from "../types/workflow.js";

export type SubWorkflowStep = BaseStep & {
  call: string;
  args: Record<string, any>;
}

export const subworkflows: Record<string, SubWorkflow> = {
  ...assert2xx.swf,
  ...assertTranscriptStage.swf,
  ...cloudFunction.swf
}

export const callSub = {
  assert2xx: assert2xx.call,
  assertTranscriptStage: assertTranscriptStage.call,
  cloudFunction: cloudFunction.call
}
