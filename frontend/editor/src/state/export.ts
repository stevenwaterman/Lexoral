import { saveAs } from "file-saver";
import { SectionStore, sectionStores } from "./section/sectionStore"

export function exportTranscript() {
  const entries = Object.entries(sectionStores).map(([key, val]) => [parseInt(key), val] as const);
  entries.sort((a, b) => a[0] - b[0]);

  const sections = entries.map(entry => entry[1]);
  const output = exportTranscriptPlainText(sections);
  const blob = new Blob([output], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "lexoralExport.txt");
}

export function exportTranscriptPlainText(sections: SectionStore[]): string {
  return sections.map(sectionToPlainText).reduce((acc, elem) => acc + elem, "");
}

function sectionToPlainText(section: SectionStore): string {
  return `${section.displayText}${section.endsParagraph ? "\n" : " "}`;
}

type Subtitle = {
  startTime: number;
  endTime: number;
  text: string;
};

export function exportTranscriptSubtitles(sections: SectionStore[]): string {
  let startTime: number | undefined = undefined;
  let text: string = "";

  const subtitles: Subtitle[] = [];

  for (const section of sections) {
    if (startTime === undefined) {
      startTime = section.startTime;
    }
    text += " "
    text += section.displayText;

    if (section.endsParagraph) {
      subtitles.push({
        startTime: startTime as number,
        endTime: section.endTime as number,
        text: text.trim()
      });

      startTime = undefined;
      text = "";
    }
  }

  return subtitles.map(subtitleToText).reduce((acc, elem) => acc + elem + "\n\n", "").trim();
}

function subtitleToText({ startTime, endTime, text }: Subtitle, idx: number): string {
  return `
${idx + 1}
${secondsToSubtitleTime(startTime)} --> ${secondsToSubtitleTime(endTime)}
${text}
  `.trim();
}

function secondsToSubtitleTime(time: number): string {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = Math.floor(time % 60);
  const millis = Math.floor((time % 1) * 1000);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")},${millis.toString().padStart(2, "0")}`;
}