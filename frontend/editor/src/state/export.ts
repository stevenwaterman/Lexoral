import { saveAs } from "file-saver";
import { get_store_value } from "svelte/internal";
import type { SectionStore } from "./section/sectionStore";
import { getSectionStores } from "./section/sectionStoreRegistry";

export function exportTranscript(type: "txt" | "srt") {
  const entries = Object.entries(getSectionStores()).map(([key, val]) => [parseInt(key), val] as const);
  entries.sort((a, b) => a[0] - b[0]);

  const sections = entries.map(entry => entry[1]);
  const output = type === "txt" ? exportTranscriptPlainText(sections) : exportTranscriptSubtitles(sections);
  const blob = new Blob([output], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "lexoralExport.txt");
}

export function exportTranscriptPlainText(sections: SectionStore[]): string {
  return sections.map(sectionToPlainText).reduce((acc, elem) => acc + elem, "");
}

function sectionToPlainText({ displayTextStore, endParagraphStore }: SectionStore): string {
  const displayText = get_store_value(displayTextStore);
  const endsParagraph = get_store_value(endParagraphStore);
  return `${displayText}${endsParagraph ? "\n" : " "}`;
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

  for (const { startTimeStore, endTimeStore, displayTextStore, endParagraphStore } of sections) {
    if (startTime === undefined) {
      startTime = get_store_value(startTimeStore);
    }

    text += " "
    text += get_store_value(displayTextStore);

    if (get_store_value(endParagraphStore)) {
      subtitles.push({
        startTime: startTime as number,
        endTime: get_store_value(endTimeStore) as number,
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