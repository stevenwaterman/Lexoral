export function isDemo(): boolean {
  return process.env["DEMO"] === "true";
}

let isEmbedded: boolean | undefined = undefined;
export function isEmbeddedDemo(): boolean {
  if (isEmbedded !== undefined) return isEmbedded;

  if (!isDemo) {
    isEmbedded = false;
    return false;
  }
  
  try {
    isEmbedded = window.self !== window.top;
  } catch (e) { // Browser security policies mean we can't access .top => we are embedded
    isEmbedded = true;
  }

  return isEmbedded;
}