import assert2xx from "./assert2xx.js";
import assertTranscriptStage from "./assertTranscriptStage.js";
import cloudFunction from "./cloudFunction.js";
import { SubWorkflow } from "../types.js";

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
