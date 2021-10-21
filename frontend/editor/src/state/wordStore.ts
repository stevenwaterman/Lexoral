let wordSet: Set<string>;

export async function initWords() {
  return fetch("https://raw.githubusercontent.com/lorenbrichter/Words/master/Words/en.txt")
    .then(res => res.text())
    .then(text => text.split("\n"))
    .then(words => wordSet = new Set<string>(words))
    .then(() => {
      wordSet.add("a");
    });
}

export function isKnownWord(word: string): boolean {
  return wordSet.has(word);
}

export function sanitisePlaceholder(placeholder: string): string {
  const text = placeholder.toLowerCase();
  const words = text.split(" ");
  const capitalisedWords = words.map(word => capitaliseUnknownWord(word));
  return capitalisedWords.join(" ");
}

function capitaliseUnknownWord(word: string): string {
  if (word.length === 0) return word;
  if (isKnownWord(word)) return word;

  return capitalise(word);
}

export function capitalise(word: string): string {
  return word.slice(0,1).toUpperCase() + word.slice(1);
}
