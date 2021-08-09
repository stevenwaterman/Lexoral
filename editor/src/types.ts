export type OutputSection = {
  idx: number;
  startTime: number;
  endTime: number;
  options: {text: string; confidence: number}[];
  startParagraph: boolean
}
export type Output = OutputSection[];

export type JsonOutputSection = {
  startTime: number;
  endTime: number;
  options: {text: string; confidence: number}[];
  startParagraph: boolean
}
export type JsonOutput = OutputSection[];