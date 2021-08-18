import { writable, Readable, derived, Writable } from "svelte/store";
import { getOptions } from "./align";

export type JsonOutputSection = {
  startTime: number;
  endTime: number;
  options: {text: string; confidence: number}[];
  startParagraph: boolean
}
export type JsonOutput = JsonOutputSection[];

export type Section = {
  time: {
    start: number;
    end: number;
  }
  text: string;
  // todo edited
  options: string[];
}

export type Paragraph = Section[];

export type Document = Paragraph[];

export const documentStore: Writable<Document> = writable([]);

export function setDocument(output: JsonOutput): void {
  const document: Document = [];
  let paragraph: Paragraph = [];

  output.forEach((outputSection, idx) => {
    if (idx !== 0 && outputSection.startParagraph) {
      document.push(paragraph);
      paragraph = [];
    }

    const section: Section = {
      time: {
        start: outputSection.startTime,
        end: outputSection.endTime
      },
      text: outputSection.options[0].text,
      options: outputSection.options.map(option => option.text)
    }

    paragraph.push(section);
  })

  document.push(paragraph);
  documentStore.set(document);
}
