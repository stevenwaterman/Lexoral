let wordSet: Set<string>;

/** No dependencies */
export async function initWords() {
  return fetch("/assets/wordlist.txt")
    .then(res => res.text())
    .then(text => text.split("\n"))
    .then(words => wordSet = new Set<string>(words));
}

export function isKnownWord(word: string): boolean {
  return wordSet.has(word);
}
