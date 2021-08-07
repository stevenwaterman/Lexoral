export type OutputSection = {
  startTime: number;
  endTime: number;
  options: {text: string; confidence: number}[];
  endParagraph: boolean
}
export type Output = OutputSection[];