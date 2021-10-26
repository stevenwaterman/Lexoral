import { derived, Readable } from "svelte/store";
import { capitalise, isKnownWord } from "../wordStore";
import { getOptions } from "./align";

export function getCompletionStore(
  userTextStore: Readable<string | null>,
  rawOptions: [string, ...string[]],
  placeholderCapitalisationStore: Readable<boolean>,
  placeholderPunctuationStore: Readable<string>
): Readable<[string, ...string[]]> {
  const sanitisedOptions = rawOptions.map(option => sanitiseOption(option));

  const dedupedOptions: string[] = [];
  sanitisedOptions.forEach(option => {
    if (!dedupedOptions.includes(option)) dedupedOptions.push(option);
  });

  const stylisedOptions = derived(
    [placeholderCapitalisationStore, placeholderPunctuationStore],
    ([capitalisation, punctuation]) => 
      dedupedOptions.map(option => styliseOption(option, capitalisation, punctuation))
  );

  const alignedOptions = derived([stylisedOptions, userTextStore], ([options, userText]) => {
    if (userText === null) return options as [string, ...string[]];
    else return getOptions(userText, options as [string, ...string[]])
  });

  return alignedOptions;
}

function sanitiseOption(option: string): string {
  const words = option.split(" ");

  const lowercaseWords = words.map(word => {
    if (word.length > 1 && word === word.toUpperCase()) return word; // Keep eg USA all-caps
    return word.toLowerCase();
  });

  const noPunctuationWords = lowercaseWords.map(word => {
    const lastLetter = word[word.length - 1];
    if (lastLetter === "." || lastLetter === "," || lastLetter === "?" || lastLetter === "!") return word.slice(0, word.length - 1);
    else return word;
  });

  const capitalisedWords = noPunctuationWords.map(word => {
    if (!isKnownWord(word)) return capitalise(word);
    return word;
  })
    
  return capitalisedWords.join(" ")
}

function styliseOption(option: string, capitalisation: boolean, punctuation: string) {
  const maybeCapitalised = capitalisation ? capitalise(option) : option;
  return maybeCapitalised + punctuation;
}