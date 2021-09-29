export type Workflow = {
  main: SubWorkflow
} & Record<string, SubWorkflow>;

export type SubWorkflow = {
  params: string[],
  steps: StepWrapper<any>[]
}

export type StepWrapper<STEP extends Step> = Record<string, STEP>;

export type VariableStep = {
  assign: Record<string, string | null>[]
}

export type ConditionStep = {
  switch: SwitchCondition[];
}
export type SwitchCondition = SwitchJumpCondition | SwitchExecuteCondition;
export type SwitchJumpCondition = {
  condition: string;
  next: string;
}
export type SwitchExecuteCondition = {
  condition: string;
  steps: StepWrapper<any>[];
}

export type HttpStep = {
  call: "http.delete"|"http.get"|"http.patch"|"http.post"|"http.put";
  args: {
    url: string;
    headers?: Record<string, string>;
    body?: Record<string, string>;
    query?: Record<string, string>;
    auth?: {
      type: "OIDC" | "OAuth2";
    };
    timeout?: string;
  };
  result?: string;
}

export type SleepStep = {
  call: "sys.sleep",
  args: {
    seconds: number
  }
}

export type SubWorkflowStep = {
  call: string;
  args: Record<string, string>;
}

export type FailStep = {
  raise: string;
}

export type BaseStep = {
  next?: string;
  return?: string;
}

export type Step = BaseStep & (VariableStep | ConditionStep | HttpStep | SleepStep | SubWorkflowStep | FailStep | {});
