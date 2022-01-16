import type { SnippetConfig } from "$lib/blog/blogData";

const exampleTs: SnippetConfig = {
	name: "audio.ts",
	language: "ts",
	snippet: `
    import { doc, DocumentReference } from "firebase/firestore";
    import { FirestoreWritable } from "./utils/firestoreWritable";

    const initial = {
      loop: false,
      volume: 100,
      rate: 100
    }

    export const audioSettings = new FirestoreWritable(
      () => doc(firestore, userId, "settings") as DocumentReference<typeof initial>,
      initial
    );`
};

const exampleSvelte: SnippetConfig = {
	name: "Volume.svelte",
	language: "svelte",
	snippet: `
    <script lang="ts">
      import { audioSettings } from "./example";
      $: volumeStore = audioSettings.getField("volume");
    </script>

    <input type="range" min={0} max={100} step={1} bind:value={$volumeStore}/>`
};

const firestoreWritable1: SnippetConfig = {
	name: "basic.ts",
	language: "ts",
	snippet: `
    import { DocumentReference, onSnapshot, setDoc } from "firebase/firestore";
    import { Readable, Writable, writable } from "svelte/store";

    export class FirestoreWritable<T extends Record<string, any>> implements Readable<T> {
      constructor(
        private readonly document: DocumentReference<T>,
        private readonly initial: T
      ) {
        onSnapshot(document, snapshot => {
          const data = snapshot.data();
          if (data !== undefined) this.remoteStore.set({ ...initial, ...data });
        });
      }

      private readonly remoteStore: Writable<T> = writable(this.initial);
      public readonly subscribe: Readable<T>["subscribe"] = this.remoteStore.subscribe;

      async commit(patch: Partial<T>) {
        await setDoc(
          this.document,
          patch as PartialWithFieldValue<T>,
          { merge: true }
        );
      }
    }`
};

const firestoreWritable2: SnippetConfig = {
  name: "connectable.ts",
  language: "ts",
  snippet: `
    import { DocumentReference, onSnapshot, setDoc } from "firebase/firestore";
    import { Readable, Writable, writable } from "svelte/store";

    export class FirestoreWritable<T extends Record<string, any>> implements Readable<T> {
      constructor(
        private readonly documentSupplier: () => DocumentReference<T>,
        private readonly initial: T
      ) {}

      private connected = false;
      private readonly remoteStore: Writable<T> = writable(this.initial);
      public readonly subscribe: Readable<T>["subscribe"] = this.remoteStore.subscribe;

      connect() {
        if (this.connected) throw new Error("Already connected");
        this.connected = true;

        onSnapshot(this.documentSupplier(), (snapshot) => {
          const data = snapshot.data();
          if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
        });
      }

      async commit(patch: Partial<T>) {
        await setDoc(this.documentSupplier(), patch as any, { merge: true });
      }
    }`
}

const firestoreWritable3: SnippetConfig = {
  name: "debounced.ts",
  language: "ts",
  snippet: `
    import { DocumentReference, onSnapshot, setDoc } from "firebase/firestore";
    import { get_store_value } from "svelte/internal";
    import { derived, Readable, Writable, writable } from "svelte/store";
    
    export class FirestoreWritable<T extends Record<string, any>> implements Readable<T> {
      constructor(
        private readonly documentSupplier: () => DocumentReference<T>,
        private readonly initial: T,
        private readonly debounceDelayMs: number = 1000
      ) {}
    
      private connected = false;
      private readonly remoteStore: Writable<T> = writable(this.initial);
      private readonly stageStore: Writable<Partial<T>> = writable({});
      private readonly localStore: Readable<T> = derived(
        [this.remoteStore, this.stageStore],
        ([remote, stage]) => ({ ...remote, ...stage })
      );
      public readonly subscribe: Readable<T>["subscribe"] = this.localStore.subscribe;
    
      connect() {
        if (this.connected) throw new Error("Already connected");
        this.connected = true;
    
        onSnapshot(this.documentSupplier(), (snapshot) => {
          const data = snapshot.data();
          if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
        });
    
        let timer: NodeJS.Timeout | undefined = undefined;
        this.stageStore.subscribe((stageState) => {
          if (timer !== undefined) clearTimeout(timer);
          if (stageState === {}) return;
          timer = setTimeout(() => this.push(stageState), this.debounceDelayMs);
        });
      }
    
      async push(stageState?: Partial<T>): Promise<void> {
        if (!this.connected) throw new Error("Store has not been connected to firestore, cannot push");
        if (stageState === undefined) stageState = get_store_value(this.stageStore);
        await setDoc(this.documentSupplier(), stageState as any, { merge: true });
        this.stageStore.set({});
      }
    
      commit(patch: Partial<T>) {
        this.stageStore.update((state) => ({ ...state, ...patch }));
      }
    }`
}

const firestoreWritable4: SnippetConfig = {
  name: "fieldAccess.ts",
  language: "ts",
  snippet: `
    import { DocumentReference, onSnapshot, setDoc } from "firebase/firestore";
    import { get_store_value } from "svelte/internal";
    import { derived, Readable, Writable, writable } from "svelte/store";
    
    export class FirestoreWritable<T extends Record<string, any>> implements Readable<T> {
      constructor(
        private readonly documentSupplier: () => DocumentReference<T>,
        private readonly initial: T,
        private readonly debounceDelayMs: number = 1000
      ) {}
    
      private connected = false;
      private readonly remoteStore: Writable<T> = writable(this.initial);
      private readonly stageStore: Writable<Partial<T>> = writable({});
      private readonly localStore: Readable<T> = derived(
        [this.remoteStore, this.stageStore],
        ([remote, stage]) => ({ ...remote, ...stage })
      );
      public readonly subscribe: Readable<T>["subscribe"] = this.localStore.subscribe;
    
      connect() {
        if (this.connected) throw new Error("Already connected");
        this.connected = true;
    
        onSnapshot(this.documentSupplier(), (snapshot) => {
          const data = snapshot.data();
          if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
        });
    
        let timer: NodeJS.Timeout | undefined = undefined;
        this.stageStore.subscribe((stageState) => {
          if (timer !== undefined) clearTimeout(timer);
          if (stageState === {}) return;
          timer = setTimeout(() => this.push(stageState), this.debounceDelayMs);
        });
      }
    
      async push(stageState?: Partial<T>): Promise<void> {
        if (!this.connected) throw new Error("Store has not been connected to firestore, cannot push");
        if (stageState === undefined) stageState = get_store_value(this.stageStore);
        await setDoc(this.documentSupplier(), stageState as any, { merge: true });
        this.stageStore.set({});
      }
    
      commit(patch: Partial<T>) {
        this.stageStore.update((state) => ({ ...state, ...patch }));
      }
    
      getField<K extends keyof T>(key: K): FirestoreWritableField<T, K> {
        return new FirestoreWritableField<T, K>(this, key);
      }
    }
    
    class FirestoreWritableField<T extends Record<string, any>, K extends keyof T>
      implements Writable<T[K]>
    {
      constructor(private readonly parent: FirestoreWritable<T>, private readonly key: K) {}
    
      private readonly derivedStore: Readable<T[K]> = derived(
        this.parent,
        (parentValue) => parentValue[this.key]
      );
      public readonly subscribe = this.derivedStore.subscribe;
      public readonly push = this.parent.push;
    
      set(value: T[K]) {
        const patch: Partial<T> = {};
        patch[this.key] = value;
        this.parent.commit(patch);
      }
    
      update(updater: (value: T[K]) => T[K]) {
        const oldValue = get_store_value(this.derivedStore);
        this.set(updater(oldValue));
      }
    }`
}

const firestoreWritable5: SnippetConfig = {
  name: "fieldCaching.ts",
  language: "ts",
  snippet: `
  import { DocumentReference, onSnapshot, setDoc } from "firebase/firestore";
  import { get_store_value } from "svelte/internal";
  import { derived, Readable, Writable, writable } from "svelte/store";
  
  export class FirestoreWritable<T extends Record<string, any>> implements Readable<T> {
    constructor(
      private readonly documentSupplier: () => DocumentReference<T>,
      private readonly initial: T,
      private readonly debounceDelayMs: number = 1000
    ) {}
  
    private connected = false;
    private readonly remoteStore: Writable<T> = writable(this.initial);
    private readonly stageStore: Writable<Partial<T>> = writable({});
    private readonly localStore: Readable<T> = derived(
      [this.remoteStore, this.stageStore],
      ([remote, stage]) => ({ ...remote, ...stage })
    );
    public readonly subscribe: Readable<T>["subscribe"] = this.localStore.subscribe;
  
    connect() {
      if (this.connected) throw new Error("Already connected");
      this.connected = true;
  
      onSnapshot(this.documentSupplier(), (snapshot) => {
        const data = snapshot.data();
        if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
      });
  
      let timer: NodeJS.Timeout | undefined = undefined;
      this.stageStore.subscribe((stageState) => {
        if (timer !== undefined) clearTimeout(timer);
        if (stageState === {}) return;
        timer = setTimeout(() => this.push(stageState), this.debounceDelayMs);
      });
    }
  
    async push(stageState?: Partial<T>): Promise<void> {
      if (!this.connected) throw new Error("Store has not been connected to firestore, cannot push");
      if (stageState === undefined) stageState = get_store_value(this.stageStore);
      await setDoc(this.documentSupplier(), stageState as any, { merge: true });
      this.stageStore.set({});
    }
  
    commit(patch: Partial<T>) {
      this.stageStore.update((state) => ({ ...state, ...patch }));
    }
  
    private readonly fields: Partial<Record<keyof T, FirestoreWritableField<T, keyof T>>> = {};
  
    getField<K extends keyof T>(key: K): FirestoreWritableField<T, K> {
      if (!(key in this.fields)) this.fields[key] = new FirestoreWritableField(this, key);
      return this.fields[key] as FirestoreWritableField<T, K>;
    }
  }
  
  class FirestoreWritableField<T extends Record<string, any>, K extends keyof T>
    implements Writable<T[K]>
  {
    constructor(private readonly parent: FirestoreWritable<T>, private readonly key: K) {}
  
    private readonly derivedStore: Readable<T[K]> = derived(
      this.parent,
      (parentValue) => parentValue[this.key]
    );
    public readonly subscribe = this.derivedStore.subscribe;
    public readonly push = this.parent.push;
  
    set(value: T[K]) {
      const patch: Partial<T> = {};
      patch[this.key] = value;
      this.parent.commit(patch);
    }
  
    update(updater: (value: T[K]) => T[K]) {
      const oldValue = get_store_value(this.derivedStore);
      this.set(updater(oldValue));
    }
  }`
}

export default {
	exampleTs,
	exampleSvelte,
  firestoreWritable1,
  firestoreWritable2,
  firestoreWritable3,
  firestoreWritable4,
  firestoreWritable5
} as const;
