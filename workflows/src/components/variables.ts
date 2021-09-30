import { VariableStep } from "../types/workflow";

export function variables(...assignmentBlocks: Record<string, string | null>[]): VariableStep {
  const variableStep: VariableStep = {
    assign: []
  };
  assignmentBlocks.forEach(block => {
    for (const variable in block) {
      variableStep.assign.push({
        [variable]: block[variable]
      })
    }
  });
  if (variableStep.assign.length > 10) throw new Error("Can only assign 10 variables per step");
  return variableStep;
}

export function userTranscriptConfigVars(): VariableStep {
  return variables({
    user_id: '${config.userId}',
    transcript_id: '${config.transcriptId}',
  })
}
