import { allSectionsStore, SectionStore } from "../text/textState";
import { sendToast } from "../display/toast/toasts";
import { getOptions } from "../preprocess/align";

type HistoricSelection = Pick<Selection, "anchorNode" | "anchorOffset" | "focusNode" | "focusOffset">;

type HistoricSectionState = {
  text: string;
  edited: boolean;
}

/**
 * Selection is the selection at the point of `to`
 */
type HistoricStep = {
  selection: HistoricSelection;
  sectionIdx: number;
  from: HistoricSectionState;
  to: HistoricSectionState;
  finalised: boolean;
}

let allSections: Record<number, SectionStore> = {};
allSectionsStore.subscribe(state => allSections = state);

let step: number = 0;
const history: HistoricStep[] = [];

function isStepValid(newStep: number): boolean {
  if (newStep < -1) return false;
  if (newStep >= history.length) return false;
  return true;
}

export async function undo() {
  if (!history.length) return;

  const {sectionIdx, from} = history[step];
  const currentStore = allSections[sectionIdx];
  currentStore.update(state => ({
    ...state,
    text: from.text,
    edited: from.edited,
    completionOptions: getOptions(from.text, state.originalOptions)
  }));

  const newStep = step - 1;
  if (!isStepValid(newStep)) return;
  step = newStep;

  if (step > 0) {
    const {anchorNode, anchorOffset, focusNode, focusOffset} = history[step]?.selection;
    if (!anchorNode || !anchorOffset || !focusNode || !focusOffset) return;
    window.getSelection()?.setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset);
  } else {
    const {anchorNode, anchorOffset, focusNode, focusOffset} = history[0]?.selection;
    if (!anchorNode || !anchorOffset || !focusNode || !focusOffset) return;
    window.getSelection()?.setBaseAndExtent(anchorNode, 0, focusNode, 0);
  }

  sendToast("undo")
}

export async function redo() {
  const newStep = step + 1;
  if (!isStepValid(newStep)) return;
  step = newStep;

  const {sectionIdx, to, selection} = history[step];
  const store = allSections[sectionIdx];
  store.update(state => ({
    ...state,
    text: to.text,
    edited: to.edited,
    completionOptions: getOptions(to.text, state.originalOptions)
  }));

  const {anchorNode, anchorOffset, focusNode, focusOffset} = selection;
  if (!anchorNode || !anchorOffset || !focusNode || !focusOffset) return;
  window.getSelection()?.setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset);

  sendToast("redo")
}

export function saveCurrentStateInHistory(
  sectionIdx: number,
  from: {
    text: string;
    edited: boolean;
  },
  to: {
    text: string;
    edited: boolean;
  }
) {
  const windowSelection = window.getSelection();
  if (!windowSelection) return;

  trimHistory();

  const selection = {
    anchorNode: windowSelection.anchorNode,
    anchorOffset: windowSelection.anchorOffset,
    focusNode: windowSelection.focusNode,
    focusOffset: windowSelection.focusOffset
  };

  const lastHistory = history[history.length - 1];
  if (lastHistory && lastHistory.sectionIdx === sectionIdx && !lastHistory.finalised) {
    // Edit instead of adding
    lastHistory.to = to;
    lastHistory.selection = selection;
  } else {
    // Finalise the last history to stop any more updates
    if (lastHistory) lastHistory.finalised = true;
    // Add new history
    history.push({ selection, sectionIdx, from, to, finalised: false });
  }

  step = history.length - 1;
}

/**
 * Deletes any future history after the current step
 */
function trimHistory() {
  history.splice(step + 1, history.length - step);
}
