export type OutputSection = {
  startTime: number;
  endTime: number;
  options: {text: string; confidence: number}[];
}
export type Output = OutputSection[];