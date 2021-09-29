import { StepWrapper, VariableStep } from "./workflow";

export function variables(name: string, ...assignmentBlocks: Record<string, string | null>[]): [StepWrapper<VariableStep>] {
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
  const step: StepWrapper<VariableStep> = { [name]: variableStep };
  return [step];
}
