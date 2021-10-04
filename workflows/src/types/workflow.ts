import { WriteDocumentStep } from "./firestore";

export type Workflow = {
  main: SubWorkflow
} & Record<string, SubWorkflow>;

export type SubWorkflow = {
  params: string[],
  steps: StepWrapper<Step>[]
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
    timeout?: number;
  };
  result?: string;
}

export type SleepStep = {
  call: "sys.sleep",
  args: {
    seconds: number
  }
}

export type LogStep = {
  call: "sys.log";
  args: {
    text: string | number | Array<string | number> | Record<string, string | number>;
    severity?: "DEBUG" | "INFO" | "NOTICE" | "WARNING" | "ERROR" | "CRITICAL" | "ALERT" | "EMERGENCY";
  };
}

export type FailStep = {
  raise: string;
}

export type TryCatchStep = {
  try: {
    steps: StepWrapper<any>[]
  },
  except: {
    as: string,
    steps: StepWrapper<any>[]
  }
}

export type ReadDocumentStep = {
  call: "googleapis.firestore.v1.projects.databases.documents.get";
  args: {
    name: string;
  };
  result: string
}

export type BaseStep = {
  next?: string;
  return?: string;
}

export type Step = BaseStep & (VariableStep | ConditionStep | HttpStep | SleepStep | FailStep | LogStep | WriteDocumentStep | ReadDocumentStep | TryCatchStep | {});
