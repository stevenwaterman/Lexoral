import { NWaligner } from "seqalign";

const defaultAligner = NWaligner({
  similarityScoreFunction: (char1: string, char2: string) => (char1.toLowerCase() === char2.toLowerCase() ? 1 : -2)
});

/**
 * Correct the initial autocomplete suggestions based on the current text input
 */
export function getOptions(text: string, options: [string, ...string[]]): [string, ...string[]] {
  const newOptions = options.map(option => alignOption(text, option));
  newOptions.sort((a, b) => b.score - a.score);
  const justText = newOptions.map(option => option.text);

  const deduped: string[] = [text];
  justText.filter(str => {
    if (deduped.includes(str)) return false;
    deduped.push(str);
    return true;
  });
  return deduped as [string, ...string[]];
}

/**
 * Align two strings and return a similarity score
 */
function alignOption(inputText: string, optionText: string): { text: string; score: number } {
  if (!inputText) return { text: optionText, score: 0 };

  const alignment = defaultAligner.align(inputText, optionText);
  const inputAlignment: string = alignment.alignedSequences[0];

  let dashes = 0;
  for(let i = inputAlignment.length; i--; i >= 0) {
    if (inputAlignment[i] === "-") {
      dashes++;
    } else {
      break;
    }
  }

  const completion = optionText.substring(optionText.length - dashes, optionText.length);
  return { text: inputText + completion, score: alignment.score };
}