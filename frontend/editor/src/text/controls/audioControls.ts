import { get_store_value } from "svelte/internal";
import { stopAudio, toggleAudio } from "../../audio/audioPlayer";
import { lastPlayingSectionIdxStore } from "../../audio/audioStatus";
import { findSectionNode, selectEnd } from "../../input/select";
import type { SectionStore } from "../../state/section/sectionStore";
import { audioStore } from "../../state/settings/audioStore";
import { clamp } from "../../utils/list";
import type { SectionKeyboardEvent } from "./sectionInput";

export async function volumeUp(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  audioStore.getField("volume").update(volume => clamp(volume + 5, 0, 100));
}

export async function volumeDown(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  audioStore.getField("volume").update(volume => clamp(volume - 5, 0, 100));
}

export async function rateUp(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  audioStore.getField("rate").update(rate => {
    if (rate >= 300) return 300;
    if (rate >= 100) return rate + 25;
    return rate + 10;
  });
}

export async function rateDown(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  audioStore.getField("rate").update(rate => {
    if (rate <= 20) return 20;
    if (rate <= 100) return rate - 10;
    return rate - 25;
  });
}

export async function toggleLoop(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  audioStore.getField("loop").update(loop => !loop);
}

export async function toggleAutoplay(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  audioStore.getField("autoPlay").update(autoPlay => !autoPlay);
}

export async function togglePlay(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  await toggleAudio();
}

export async function jumpTo(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  const idx = get_store_value(lastPlayingSectionIdxStore);
  if (idx !== null) {
    const component = findSectionNode(idx);
    if (component) {
      await selectEnd(component);
      stopAudio();
    }
  }
}

export async function onwardMode(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  audioStore.getField("mode").set("onward");
}

export async function contextMode(event: SectionKeyboardEvent, section: SectionStore) {
  event.preventDefault();
  audioStore.getField("mode").set("context");
}
