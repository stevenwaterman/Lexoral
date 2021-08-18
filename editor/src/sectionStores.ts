import { writable, Readable, derived, Writable } from "svelte/store";
import { getOptions } from "./align";

export type JsonOutputSection = {
  startTime: number;
  endTime: number;
  options: {text: string; confidence: number}[];
  startParagraph: boolean
}
export type JsonOutput = JsonOutputSection[];

export type SectionState = {
  time: {
    start: number;
    end: number;
  }
  text: string;
  // todo edited
  options: string[];
}

export type ParagraphState = SectionState[];

export type DocumentState = ParagraphState[];

export const documentStore: Writable<DocumentState> = writable([]);

export function setDocument(output: JsonOutput): void {
  const document: DocumentState = [];
  let paragraph: ParagraphState = [];

  output.forEach((outputSection, idx) => {
    if (idx !== 0 && outputSection.startParagraph) {
      document.push(paragraph);
      paragraph = [];
    }

    const section: SectionState = {
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
