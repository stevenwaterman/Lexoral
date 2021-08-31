import { SectionStore, MaybeSectionStore, Section, Paragraph, documentStore } from "./textState";
import { getOptions } from "../preprocess/align";
import { Writable, writable } from "svelte/store";
import type { CursorPosition } from "../input/selectionState";

abstract class BaseSectionMutator<S> {
  protected readonly underlying: Writable<S>;

  constructor(underlying: Writable<S>) {
    this.underlying = underlying;
  }

  get(): Writable<S> {
    return this.underlying;
  }

  abstract update(func: (state: Section) => Section): this;

  setText(text: string): this {
    return this.update(section => ({
      ...section,
      text,
      completionOptions: getOptions(text, section.originalOptions),
      edited: true
    }))
  }

  registerComponent(component: HTMLSpanElement): this {
    return this.update(section => ({
      ...section,
      spanComponent: component
    }));
  }

  deleteText(offsets?: { start?: number, end?: number }): this {
    const startOffset = offsets?.start;
    const endOffset = offsets?.end;
    return this.update(state => {
      const currentText = state.edited ? state.text : state.placeholder;

      // debugger
      let newText = "";
      if (startOffset !== undefined) {
        newText += currentText.substring(0, startOffset);
      }
      if (endOffset !== undefined) {
        newText += currentText.substring(endOffset);
      }

      return {
        ...state,
        text: newText,
        completionOptions: getOptions(newText, state.originalOptions),
        edited: true
    }})
  }
}

export class SectionMutator extends BaseSectionMutator<Section> {
  update(func: (state: Section) => Section): this {
    this.underlying.update(func);
    return this;
  }
}

export class MaybeSectionMutator extends BaseSectionMutator<Section | undefined> {
  update(func: (state: Section) => Section): this {
    this.underlying.update(state => {
      if (state === undefined) return undefined;
      else return func(state);
    })
    return this;
  }
}






abstract class BaseParagraphMutator<S> {
  protected readonly underlying: Writable<S>;

  constructor(underlying: Writable<S>) {
    this.underlying = underlying;
  }

  get(): Writable<S> {
    return this.underlying;
  }

  abstract update(func: (state: Paragraph) => Paragraph): this;

  append(store: SectionStore): this {
    return this.update(state => {
      state.push(store);
      return state;
    });
  }

  split(position: CursorPosition) {
    this.update(state => {
      const remainingSections = state.slice(0, position.section);
  
      const removedSections = state.slice(position.section);
      const newParagraphStore = writable(removedSections);
      documentStore.update(document => {
        document.splice(position.paragraph + 1, 0, newParagraphStore);
        return document;
      })
  
      return remainingSections;
    })
  }
}

export class ParagraphMutator extends BaseParagraphMutator<Paragraph> {
  update(func: (state: Paragraph) => Paragraph): this {
    this.underlying.update(func);
    return this;
  }
}

export class MaybeParagraphMutator extends BaseParagraphMutator<Paragraph | undefined> {
  update(func: (state: Paragraph) => Paragraph): this {
    this.underlying.update(state => {
      if (state === undefined) return undefined;
      else return func(state);
    })
    return this;
  }
}
