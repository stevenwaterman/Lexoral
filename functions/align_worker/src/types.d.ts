declare module "seqalign" {
  export function NWaligner(options: {
    similarityScoreFunction: (char1: string, char2: string) => number
  }): {
    align: (a: string | null | undefined, b: string | null | undefined) => {
      score: number;
      alignedSequences: [string, string];
    }
  };
}