let wordSet: Set<string>;

export async function initWords() {
  return fetch("https://raw.githubusercontent.com/dwyl/english-words/master/words.txt")
    .then(res => res.text())
    .then(text => text.split("\n"))
    .then(words => words.filter(word => validWord(word)))
    .then(words => wordSet = new Set<string>(words))
    .then(() => {
      [
        "a", "of", "to", "in", "it", "is", 
        "be", "as", "at", "so", "we", "he", 
        "by", "or", "on", "do", "if", "me", 
        "my", "up", "an", "go", "no", "us", 
        "am"
      ].forEach(word => wordSet.add(word))
    })
}

function validWord(word: string): boolean {
  const bannedCharsOnly = word.replace(/[^A-Z0-9.&]/g, "");
  if (bannedCharsOnly.length > 0) return false;

  const last = word[word.length - 1];
  if (last === "-") return false;

  return true;
}

export function isKnownWord(word: string): boolean {
  debugger
  if (wordSet.has(word)) return true;

  // Avoid doing this if possible, and cache the result
  const alphanumeric = word.replace("[^a-z]", "");
  if (wordSet.has(alphanumeric)) {
    wordSet.add(word);
    return true;
  } else {
    return false;
  };
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
