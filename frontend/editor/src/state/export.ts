import { deriveUnwrapRecord } from "../utils/stores";
import { saveAs } from "file-saver";
// import { allSectionsStore, Section, SectionStore } from "./section/combinedSectionStore";

// let state: Partial<Record<number, Section>> = {};
// deriveUnwrapRecord<number, Section, SectionStore>(allSectionsStore).subscribe(sections => state = sections);

// export function exportTranscript() {
//   const keys: number[] = Object.keys(state).map(key => parseInt(key));
//   keys.sort((a, b) => a - b);

//   const sections: Section[] = keys.map(key => state[key]).filter(section => section !== undefined) as Section[];
//   const output = exportTranscriptPlainText(sections);
//   const blob = new Blob([output], {type: "text/plain;charset=utf-8"});
//   saveAs(blob, "lexoralExport.txt");
// }

// export function exportTranscriptPlainText(sections: Section[]): string {
//   return sections.map(sectionToPlainText).reduce((acc, elem) => acc + elem, "");
// }

// function sectionToPlainText(section: Section): string {
//   return `${section.text}${section.endParagraph ? "\n" : " "}`;
// }

// type Subtitle = {
//   startTime: number;
//   endTime: number;
//   text: string;
// };

// export function exportTranscriptSubtitles(sections: Section[]): string {
//   let startTime: number | undefined = undefined;
//   let text: string = "";

//   const subtitles: Subtitle[] = [];

//   for (const section of sections) {
//     if (startTime === undefined) {
//       startTime = section.startTime;
//     }
//     text += " "
//     text += section.text;

//     if (section.endParagraph) {
//       subtitles.push({
//         startTime,
//         endTime: section.endTime,
//         text: text.trim()
//       });

//       startTime = undefined;
//       text = "";
//     }
//   }

//   return subtitles.map(subtitleToText).reduce((acc, elem) => acc + elem + "\n\n", "").trim();
// }

// function subtitleToText({ startTime, endTime, text }: Subtitle, idx: number): string {
//   return `
// ${idx + 1}
// ${secondsToSubtitleTime(startTime)} --> ${secondsToSubtitleTime(endTime)}
// ${text}
//   `.trim();
// }

// function secondsToSubtitleTime(time: number): string {
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time - hours * 3600) / 60);
//   const seconds = Math.floor(time % 60);
//   const millis = Math.floor((time % 1) * 1000);
//   return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")},${millis.toString().padStart(2, "0")}`;
// }