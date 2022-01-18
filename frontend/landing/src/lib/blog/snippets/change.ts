import type { Change } from "diff";

export type LineChange = Change & {
  lines: string[];
  fromStartLine?: number;
  toStartLine?: number;
  hidden?: boolean;
};
