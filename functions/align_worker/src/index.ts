import { NWaligner } from "seqalign";
import { protos } from "@google-cloud/speech";
import utils from "lexoral-utils";
import { Request, Response } from "express";

type Result = protos.google.cloud.speech.v1p1beta1.ISpeechRecognitionResult;
type Alternative = protos.google.cloud.speech.v1p1beta1.ISpeechRecognitionAlternative;
type Word = protos.google.cloud.speech.v1p1beta1.IWordInfo;

type OutputSection = {
  startTime: number;
  endTime: number;
  options: string[];
}

type Alignment = {
  score: number;
  alignedSequences: [string, string];
};

type TimedAlternativeWord = {
  text: string;
  time?: {
    start: number;
    end: number;
  }
}

type TimedAlternative = { words: TimedAlternativeWord[] };

type WordAlternative = {
  words: {
    word: string;
    confidence: number
  }[];
  time: {
    start: number;
    end: number;
  }
};

type Params = {};
type ResBody = OutputSection[];
type ReqBody = Result;

async function handleRequest(req: Request<Params, ResBody, ReqBody>, res: Response<ResBody>) {
  const body: ReqBody = req.body;
  const aligned: ResBody = transform(body);
  res.status(200).json(aligned);
}

function transform(result: Result): OutputSection[] {
  if (!result.alternatives) return [];
  const alternatives: Alternative[] = result.alternatives.filter(alternative => alternative.transcript);
  /*
  Sometimes you get a weird section like this:
    {
      "alternatives": [
        {
          
        }
      ],
      "languageCode": "en-us",
      "resultEndTime": "118.140s"
    }
  */
  if (alternatives.length === 0) return [];
  const alignedSequences: Record<number, string> = align(alternatives);
  const timedAlternatives = breakSequences(alignedSequences, alternatives);
  const wordAlternatives = transposeAlternatives(timedAlternatives, alternatives);
  return wordAlternatives.map((alternative) => ({
    options: alternative.words.map(({word}) => word),
    startTime: alternative.time.start,
    endTime: alternative.time.end,
  }));
}

function align(alternatives: Alternative[]): Record<number, string> {
  const count = alternatives.length;

  if (count === 0) return {};
  if (count === 1) {
    const transcript = alternatives[0].transcript;
    if (!transcript) throw new Error("Transcript is undefined");
    return { 0: transcript };
  }

  const defaultAligner = NWaligner({
    similarityScoreFunction: (char1: string, char2: string) => (char1.toLowerCase() === char2.toLowerCase() ? 1 : -2),
    gapSymbol: "☐"
  });

  let alignments: Array<{
    aIdx: number;
    bIdx: number;
    result: Alignment;
  }> = [];

  // Try aligning all pairs of alternatives
  for (let aIdx = 0; aIdx < count; aIdx++) {
    for (let bIdx = aIdx + 1; bIdx < count; bIdx++) {
      const a = alternatives[aIdx];
      const b = alternatives[bIdx];
      const result = defaultAligner.align(a.transcript, b.transcript);
      alignments.push({ aIdx, bIdx, result })
    }
  }

  // Track which alternatives have been aligned so far and how they are aligned
  const alignedIdxs: number[] = [];
  const alignedSequences: Record<number, string> = {};

  // Find the best alignment and use that as a starting point
  alignments.sort((a, b) => b.result.score - a.result.score);
  const bestAlignment = alignments[0];
  if (bestAlignment === undefined) throw new Error("how did we get here?");

  alignedIdxs.push(bestAlignment.aIdx);
  alignedSequences[bestAlignment.aIdx] = bestAlignment.result.alignedSequences[0];

  alignedIdxs.push(bestAlignment.bIdx);
  alignedSequences[bestAlignment.bIdx] = bestAlignment.result.alignedSequences[1];

  // Work through the other alternatives and align them too
  while (alignedIdxs.length < alternatives.length) {
    // Filter out any alignments where both of the alternatives included have already been aligned
    alignments = alignments.filter(alignment => !alignedIdxs.includes(alignment.aIdx) || !alignedIdxs.includes(alignment.bIdx));

    // Find the first (ie best) alignment where one of the two has already been aligned
    const newAlignment = alignments.find(alignment => alignedIdxs.includes(alignment.aIdx) || alignedIdxs.includes(alignment.bIdx));
    if (newAlignment === undefined) throw new Error("Alignment list ended up empty somehow");

    // Which of the two alternatives in the alignment has already been aligned, and which one hasn't?
    const existingIdx = alignedIdxs.includes(newAlignment.aIdx) ? newAlignment.aIdx : newAlignment.bIdx;
    const newIdx = alignedIdxs.includes(newAlignment.aIdx) ? newAlignment.bIdx : newAlignment.aIdx;

    // Align the new idx with the version of the existing idx that has already been aligned with the others
    const result: Alignment = defaultAligner.align(alignedSequences[existingIdx], alternatives[newIdx].transcript);
    alignedSequences[newIdx] = result.alignedSequences[1];

    // Track where gaps need to be added in the existing alignments when we add this new one
    const addGaps: number[] = [];
    const oldSequence: string = alignedSequences[existingIdx];
    const newSequence: string = result.alignedSequences[0];

    // Find the places we need gaps adding
    let oldIdx = 0;
    for (let newIdx = 0; newIdx < newSequence.length; newIdx++) {
      const newChar = newSequence.charAt(newIdx)
      const oldChar = oldSequence.charAt(oldIdx)
      if (newChar !== oldChar) {
        addGaps.push(newIdx)
      } else {
        oldIdx++
      }
    }

    // Add the gaps needed
    alignedIdxs.forEach(id => {
      alignedSequences[id] = plusGaps(alignedSequences[id], addGaps);
    })

    // Add the new alignment to the list
    alignedIdxs.push(newIdx);
  }

  return alignedSequences;
}

// TODO confidence is going above 1?

function transposeAlternatives(timedAlternatives: TimedAlternative[], alternatives: Alternative[]): WordAlternative[] {
  const confidence: (number | null)[] = alternatives.map(alternative => alternative.confidence ?? null);

  // Create a list of the options for each word break
  const wordAlternatives: WordAlternative[] = [];
  const wordCount = timedAlternatives[0].words.length;
  for (let i = 0; i < wordCount; i++) {
    let time: { start: number; end: number } | null = null;
    const wordConfidence: Record<string, number> = {};
    timedAlternatives.forEach((sequence, idx) => {
      const alternativeWord = sequence.words[i];
      const currentConfidence = wordConfidence[alternativeWord.text];
      if (currentConfidence) {
        wordConfidence[alternativeWord.text] = 1 - ((1 - currentConfidence)*(1 - (confidence[idx] ?? 0)));
      } else {
        wordConfidence[alternativeWord.text] = confidence[idx] ?? 0;
      }
      time = alternativeWord.time || time;
    });

    if (time === null) throw new Error("Time is null")

    const output: WordAlternative = {
      words: Object.entries(wordConfidence).map(([word, confidence]) => ({word, confidence})),
      time
    };
    output.words.sort((a, b) => b.confidence - a.confidence);
    wordAlternatives.push(output);
  }
  return wordAlternatives;
}

function breakSequences(alignedSequences: Record<number, string>, alternatives: Alternative[]): TimedAlternative[] {
  // Find the location of any spaces that appear in all the aligned sequences
  const sequenceBreakLocations: Set<number>[] = Object.values(alignedSequences).map(sequence => indexesOf(sequence, " "));
  const wordBreakSet: Set<number> = sequenceBreakLocations.reduce((a, b) => intersection(a, b));

  const wordBreaks = [...wordBreakSet];
  wordBreaks.sort((a, b) => a - b);

  // Break the sequences along those line breaks, then add the timings for each word
  const wordSequences: string[][] = Object.values(alignedSequences).map(sequence => breakSequence(sequence, wordBreaks));
  const timedAlternatives: TimedAlternative[] = timeSequences(wordSequences, alternatives[0].words ?? []);
  return timedAlternatives;
}

function plusGaps(str: string, gaps: number[]): string {
  const output: string[] = str.split("")
  gaps.forEach(gapIdx => {
    output.splice(gapIdx, 0, "☐")
  })
  return output.join("")
}

function indexesOf(str: string, char: string): Set<number> {
  const indices: Set<number> = new Set();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) indices.add(i);
  }
  return indices
}

function intersection(as: Set<number>, bs: Set<number>): Set<number> {
  const output: Set<number> = new Set()
  for (const a of as) {
    if (bs.has(a)) output.add(a)
  }
  return output
}

function breakSequence(str: string, breaks: number[]): string[] {
  const broken: string[] = []

  let start: number = 0

  for (const end of breaks) {
    broken.push(str.slice(start, end))
    start = end
  }
  broken.push(str.slice(start))

  return broken.map(str => str.replace(/☐/g, "").trim()).filter(str => str.length);
}

function timeSequences(allOptions: string[][], words: Word[]): TimedAlternative[] {
  const timedAlternatives: TimedAlternative[] = [];

  // TODO fix when there's multiple words in one option (ie split on spaces and count words)
  allOptions.forEach((options: string[], idx) => {
    if (idx === 0) {
      timedAlternatives.push({
        words: options.map((sequence, seqIdx) => ({
          text: sequence,
          time: wordTime(words[seqIdx])
        }))
      })
    }
    else timedAlternatives.push({ words: options.map(word => ({ text: word })) });
  });

  return timedAlternatives;
}

function wordTime(word: Word): { start: number, end: number } {
  const startTime = word.startTime as string;
  const endTime = word.endTime as string;

  const startSeconds = parseFloat(startTime.substr(0, startTime.length - 1));
  const endSeconds = parseFloat(endTime.substr(0, endTime.length - 1));

  return { start: startSeconds, end: endSeconds };
}

export const run = utils.http.post(handleRequest);
