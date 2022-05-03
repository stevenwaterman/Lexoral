import{S as qt,i as Nt,s as Jt,q as d,r as u,m as p,k as m,w as c,e as a,g as o,t as $e,c as i,E as v,F as Bt,f as s}from"../../../chunks/vendor-f4f84365.js";import{B as Yt}from"../../../chunks/BlogPost-5e21279f.js";import{S as f}from"../../../chunks/Snippet-69f05e56.js";import"../../../chunks/Template-94d9f3df.js";import"../../../chunks/TextContainer-6589f45b.js";import"../../../chunks/date-75a350e3.js";import"../../../chunks/DiagonalSection-499ac599.js";const Qt={name:"Credit.svelte",language:"svelte",snippet:`
  <script lang="ts">
    import { creditStore } from "./credit";
  <\/script>

  <span>Credit: {$creditStore}</span>`},zt={name:"Volume.svelte",language:"svelte",snippet:`
    <script lang="ts">
      import { volumeStore } from "./audioSettings";
    <\/script>

    <input type="range" min={0} max={100} step={1} bind:value={$volumeStore}/>`},Ut={name:"audio.ts",language:"ts",snippet:`
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
    );`},Gt={name:"Volume.svelte",language:"svelte",snippet:`
    <script lang="ts">
      import { audioSettings } from "./example";
      $: volumeStore = audioSettings.getField("volume");
    <\/script>

    <input type="range" min={0} max={100} step={1} bind:value={$volumeStore}/>`},Xt={name:"Read-only store",language:"ts",snippet:`import { DocumentReference, onSnapshot, PartialWithFieldValue, setDoc } from "firebase/firestore";
  import { get_store_value } from "svelte/internal";
  import { derived, Readable, Writable, writable } from "svelte/store";
  
  export class FirestoreWritable<T extends Record<string, any>> implements Readable<T> {
    constructor(
      private readonly document: DocumentReference<T>,
      private readonly initial: T
    ) {
      onSnapshot(this.document, snapshot => {
        const data = snapshot.data();
        if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
      });
    }
  
    private readonly remoteStore: Writable<T> = writable(this.initial);
    public readonly subscribe: Readable<T>["subscribe"] = this.remoteStore.subscribe;
  }`},Zt={name:"Read-write store",language:"ts",snippet:`import { DocumentReference, onSnapshot, PartialWithFieldValue, setDoc } from "firebase/firestore";
  import { get_store_value } from "svelte/internal";
  import { derived, Readable, Writable, writable } from "svelte/store";
  
  export class FirestoreWritable<T extends Record<string, any>> implements Readable<T> {
    constructor(
      private readonly document: DocumentReference<T>,
      private readonly initial: T
    ) {
      onSnapshot(this.document, snapshot => {
        const data = snapshot.data();
        if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
      });
    }
  
    private readonly remoteStore: Writable<T> = writable(this.initial);
    public readonly subscribe: Readable<T>["subscribe"] = this.remoteStore.subscribe;
  
    commit(patch: Partial<T>) {
      setDoc(this.document, patch as any, { merge: true });
    }
  }`},ei={name:"Late-Connect",language:"ts",snippet:`import { DocumentReference, onSnapshot, PartialWithFieldValue, setDoc } from "firebase/firestore";
  import { get_store_value } from "svelte/internal";
  import { derived, Readable, Writable, writable } from "svelte/store";
  
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
  
      onSnapshot(this.documentSupplier(), snapshot => {
        const data = snapshot.data();
        if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
      });
    }
  
    commit(patch: Partial<T>) {
      if (!this.connected) throw new Error("Store has not been connected to firestore");
      setDoc(this.documentSupplier(), patch as any, { merge: true });
    }
  }`},ti={name:"Batch Write",language:"ts",snippet:`import { DocumentReference, onSnapshot, PartialWithFieldValue, setDoc } from "firebase/firestore";
  import { get_store_value } from "svelte/internal";
  import { derived, Readable, Writable, writable } from "svelte/store";
  
  export class FirestoreWritable<T extends Record<string, any>> implements Readable<T> {
    constructor(
      private readonly documentSupplier: () => DocumentReference<T>,
      private readonly initial: T
    ) {}
  
    private connected = false;
    private readonly remoteStore: Writable<T> = writable(this.initial);
    private readonly stageStore: Writable<Partial<T>> = writable({});
    private readonly localStore: Readable<T> = derived([this.remoteStore, this.stageStore], ([remote, stage]) => ({...remote, ...stage}));
    public readonly subscribe: Readable<T>["subscribe"] = this.localStore.subscribe;
  
    connect() {
      if (this.connected) throw new Error("Already connected");
      this.connected = true;
  
      onSnapshot(this.documentSupplier(), snapshot => {
        const data = snapshot.data();
        if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
      });
    }
    
    async push(): Promise<void> {
      if (!this.connected) throw new Error("Store has not been connected to firestore");
  
      await setDoc(
        this.documentSupplier(), 
        get_store_value(this.stageStore) as PartialWithFieldValue<T>,
        { merge: true }
      );
  
      this.stageStore.set({});
    }
  
    commit(patch: Partial<T>) {
      this.stageStore.update(state => ({...state, ...patch}));
    }
  }`},ii={name:"Auto-Push",language:"ts",snippet:`import { DocumentReference, onSnapshot, PartialWithFieldValue, setDoc } from "firebase/firestore";
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
    private readonly localStore: Readable<T> = derived([this.remoteStore, this.stageStore], ([remote, stage]) => ({...remote, ...stage}));
    public readonly subscribe: Readable<T>["subscribe"] = this.localStore.subscribe;
  
    connect() {
      if (this.connected) throw new Error("Already connected");
      this.connected = true;
  
      onSnapshot(this.documentSupplier(), snapshot => {
        const data = snapshot.data();
        if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
      });
  
      let timer: NodeJS.Timeout | undefined = undefined;
      this.stageStore.subscribe(stageState => {
        if (timer !== undefined) clearTimeout(timer);
        if (Object.keys(stageState).length === 0) return;
        timer = setTimeout(() => this.push(stageState), this.debounceDelayMs);
      })
    }
    
    async push(): Promise<void> {
      if (!this.connected) throw new Error("Store has not been connected to firestore");
  
      await setDoc(
        this.documentSupplier(), 
        get_store_value(this.stageStore) as PartialWithFieldValue<T>,
        { merge: true }
      );
  
      this.stageStore.set({});
    }
  
    commit(patch: Partial<T>) {
      this.stageStore.update(state => ({...state, ...patch}));
    }
  }`},si={name:"One-Field Readable Store",language:"ts",snippet:`import { DocumentReference, onSnapshot, PartialWithFieldValue, setDoc } from "firebase/firestore";
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
    private readonly localStore: Readable<T> = derived([this.remoteStore, this.stageStore], ([remote, stage]) => ({...remote, ...stage}));
    public readonly subscribe: Readable<T>["subscribe"] = this.localStore.subscribe;
  
    connect() {
      if (this.connected) throw new Error("Already connected");
      this.connected = true;
  
      onSnapshot(this.documentSupplier(), snapshot => {
        const data = snapshot.data();
        if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
      });
  
      let timer: NodeJS.Timeout | undefined = undefined;
      this.stageStore.subscribe(stageState => {
        if (timer !== undefined) clearTimeout(timer);
        if (Object.keys(stageState).length === 0) return;
        timer = setTimeout(() => this.push(stageState), this.debounceDelayMs);
      });
    }
    
    async push(): Promise<void> {
      if (!this.connected) throw new Error("Store has not been connected to firestore");
  
      await setDoc(
        this.documentSupplier(), 
        get_store_value(this.stageStore) as PartialWithFieldValue<T>,
        { merge: true }
      );
  
      this.stageStore.set({});
    }
  
    commit(patch: Partial<T>) {
      this.stageStore.update(state => ({...state, ...patch}));
    }
  
    getField<K extends keyof T>(key: K): FirestoreWritableField<T, K> {
      return new FirestoreWritableField(this, key);
    }
  }
  
  class FirestoreWritableField<T extends Record<string, any>, K extends keyof T> implements Readable<T[K]> {
    constructor(
      private readonly parent: FirestoreWritable<T>,
      private readonly key: K
    ) {}
  
    private readonly derivedStore: Readable<T[K]> = derived(this.parent, parentValue => parentValue[this.key]);
    public readonly subscribe = this.derivedStore.subscribe;
  }`},oi={name:"One-Field Writable Store",language:"ts",snippet:`import { DocumentReference, onSnapshot, PartialWithFieldValue, setDoc } from "firebase/firestore";
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
    private readonly localStore: Readable<T> = derived([this.remoteStore, this.stageStore], ([remote, stage]) => ({...remote, ...stage}));
    public readonly subscribe: Readable<T>["subscribe"] = this.localStore.subscribe;
  
    connect() {
      if (this.connected) throw new Error("Already connected");
      this.connected = true;
  
      onSnapshot(this.documentSupplier(), snapshot => {
        const data = snapshot.data();
        if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
      });
  
      let timer: NodeJS.Timeout | undefined = undefined;
      this.stageStore.subscribe(stageState => {
        if (timer !== undefined) clearTimeout(timer);
        if (Object.keys(stageState).length === 0) return;
        timer = setTimeout(() => this.push(stageState), this.debounceDelayMs);
      });
    }
    
    async push(): Promise<void> {
      if (!this.connected) throw new Error("Store has not been connected to firestore");
  
      await setDoc(
        this.documentSupplier(), 
        get_store_value(this.stageStore) as PartialWithFieldValue<T>,
        { merge: true }
      );
  
      this.stageStore.set({});
    }
  
    commit(patch: Partial<T>) {
      this.stageStore.update(state => ({...state, ...patch}));
    }
  
    getField<K extends keyof T>(key: K): FirestoreWritableField<T, K> {
      return new FirestoreWritableField(this, key);
    }
  }
  
  class FirestoreWritableField<T extends Record<string, any>, K extends keyof T> implements Writable<T[K]> {
    constructor(
      private readonly parent: FirestoreWritable<T>,
      private readonly key: K
    ) {}
  
    private readonly derivedStore: Readable<T[K]> = derived(this.parent, parentValue => parentValue[this.key]);
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
  }`},ai={name:"Cached Field Stores",language:"ts",snippet:`import { DocumentReference, onSnapshot, PartialWithFieldValue, setDoc } from "firebase/firestore";
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
    private readonly localStore: Readable<T> = derived([this.remoteStore, this.stageStore], ([remote, stage]) => ({...remote, ...stage}));
    public readonly subscribe: Readable<T>["subscribe"] = this.localStore.subscribe;

    connect() {
      if (this.connected) throw new Error("Already connected");
      this.connected = true;

      onSnapshot(this.documentSupplier(), snapshot => {
        const data = snapshot.data();
        if (data !== undefined) this.remoteStore.set({ ...this.initial, ...data });
      });

      let timer: NodeJS.Timeout | undefined = undefined;
      this.stageStore.subscribe(stageState => {
        if (timer !== undefined) clearTimeout(timer);
        if (Object.keys(stageState).length === 0) return;
        timer = setTimeout(() => this.push(stageState), this.debounceDelayMs);
      });
    }
    
    async push(): Promise<void> {
      if (!this.connected) throw new Error("Store has not been connected to firestore");

      await setDoc(
        this.documentSupplier(), 
        get_store_value(this.stageStore) as PartialWithFieldValue<T>,
        { merge: true }
      );

      this.stageStore.set({});
    }

    commit(patch: Partial<T>) {
      this.stageStore.update(state => ({...state, ...patch}));
    }

    private readonly fields: Partial<Record<keyof T, FirestoreWritableField<T, keyof T>>> = {};

    getField<K extends keyof T>(key: K): FirestoreWritableField<T, K> {
      if(!(key in this.fields)) this.fields[key] = new FirestoreWritableField(this, key);
      return this.fields[key] as FirestoreWritableField<T, K>;
    }
  }

  class FirestoreWritableField<T extends Record<string, any>, K extends keyof T> implements Writable<T[K]> {
    constructor(
      private readonly parent: FirestoreWritable<T>,
      private readonly key: K
    ) {}

    private readonly derivedStore: Readable<T[K]> = derived(this.parent, parentValue => parentValue[this.key]);
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
  }`};var r={creditExample:Qt,volumeExample:zt,finalTs:Ut,finalSvelte:Gt,stage1:Xt,stage2:Zt,stage3:ei,stage4:ti,stage5:ii,stage6:si,stage7:oi,stage8:ai};function ri(Re){let n,b,l,y,w,Ie,L,_e,M,De,P,Le,C,Me,H,Pe,j,Ce,K,He,V,je,g,Ke,E,Ve,T,Ee,A,Ae,O,Oe,q,qe,N,Ne,J,Je,S,Be,B,Ye,h,Vt,Qe,Et,ze,At,Ue,Ot,Ge,Y,Xe,W,Ze,Q,et,z,tt,U,it,G,st,X,ot,F,at,Z,rt,ee,nt,te,lt,k,dt,ie,ut,se,pt,oe,mt,ae,ct,re,ft,x,ht,ne,bt,le,yt,de,wt,ue,vt,pe,gt,$,Tt,me,St,ce,Wt,R,Ft,fe,kt,he,xt,I,$t,_,Rt,be,It,ye,_t,we,Dt,ve,Lt,D,Mt,ge,Pt,Te,Ct,Se,Ht,We,jt,Fe,Kt,ke,xe;return g=new f({props:{config:r.creditExample}}),T=new f({props:{config:r.volumeExample}}),S=new f({props:{config:r.stage1}}),W=new f({props:{diffFrom:r.stage1,config:r.stage2}}),F=new f({props:{diffFrom:r.stage2,config:r.stage3}}),k=new f({props:{diffFrom:r.stage3,config:r.stage4}}),x=new f({props:{diffFrom:r.stage4,config:r.stage5}}),$=new f({props:{diffFrom:r.stage5,config:r.stage6}}),R=new f({props:{diffFrom:r.stage6,config:r.stage7}}),I=new f({props:{config:r.finalTs}}),_=new f({props:{config:r.finalSvelte}}),D=new f({props:{diffFrom:r.stage7,config:r.stage8}}),{c(){n=a("p"),n.textContent=`I've always been weirdly fascinated by databases.
    It's probably a symptom of how I got into programming - abusing Excel spreadsheets to do things they were never meant to do.
    Still though, there's something satisfying about categorising data, querying it, and learning the answers to questions you never thought to ask.`,b=o(),l=a("p"),l.innerHTML=`Databases, as a standalone application, are incredible pieces of engineering.
    <em>However</em>, I&#39;ve definitely been frustrated at how hard it is to mesh the database with my application.
    You&#39;ve probably felt it too.`,y=o(),w=a("p"),w.textContent=`SQL feels like magic, but taking it to production is a delicate balancing act.
    ORMs promise the world, then make your life miserable as soon as you do something unexpected.
    You'll get it to work eventually, but good luck trying to explain it to anyone else!`,Ie=o(),L=a("p"),L.innerHTML=`We&#39;ve taken a totally different approach, writing a custom Svelte store that binds to Firestore.
    If you&#39;re not interested in how we did it, you can just <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/frontend/editor/src/utils/firestoreWritable.ts">read the code for yourself</a>.
    Otherwise, read on!`,_e=o(),M=a("h2"),M.textContent="A cloud-native approach",De=o(),P=a("p"),P.innerHTML=`Lexoral is <em>cloud-native</em>, which means we like confusing people with buzzwords and complicated architecture diagrams.
    It also means that Lexoral was built <em>around</em> its cloud platform, rather than just taking a finished product and deploying it onto the cloud.
    It means we take advantage of the more modern features, like serverless compute, process orchestration, and <em>Firestore</em>.`,Le=o(),C=a("figure"),C.innerHTML=`<img src="/assets/blog/svelte-firestore-binding/Pipeline.svg" alt="A complex diagram showing the components of Lexoral&#39;s transcription pipeline. The details aren&#39;t important, just know that it&#39;s a tangled mess of arrows between buckets, cloud functions, and workflows."/> 
    <figcaption>I mean, just look at our transcription pipeline...</figcaption>`,Me=o(),H=a("p"),H.innerHTML=`Firestore is a cloud-hosted NoSQL database.
    Let me stress now that it&#39;s <em>not</em> a silver bullet, and it certainly has downsides just like SQL does.
    Querying is harder, and it&#39;s incredibly easy to mess up your database schema - because there isn&#39;t one.
    I&#39;m not here to compare the two though.
    I&#39;m here to show off the cool things you can do by fully embracing Firestore.`,Pe=o(),j=a("p"),j.innerHTML=`Using the Firestore API, you can treat your database as one gigantic JSON object.
    It&#39;s a bit like having the entire database stored in the browser&#39;s memory - letting you read and write the data at any path straight from the client.
    Sounds scary, but Firestore has its own security layer, meaning you can restrict access to parts of the database depending on the user&#39;s authentication status.
    Essentially, you don&#39;t need a backend for <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a>.
    That&#39;s great, but it gets better.`,Ce=o(),K=a("p"),K.innerHTML=`Firestore&#39;s real value comes when you <em>subscribe</em> to a path in the database, getting real-time updates whenever the data changes.
    Those reactive database queries pair <em>really</em> nicely with Svelte&#39;s reactive updates.
    If you haven&#39;t heard of <a href="https://svelte.dev">Svelte</a> before, it&#39;s a frontend framework that selectively re-renders parts of the web page when variables are updated.
    It&#39;s not a runtime library, like React or Vue, instead it traverses the dependency graph between your variables at compile-time and custom-generates code to surgically update the DOM.
    You can probably see how it fits in with Firestore.`,He=o(),V=a("p"),V.innerHTML=`Combining the two, our app can display a value from the database, updating the display whenever the value changes.
    Even better, we can use Svelte&#39;s <a href="https://svelte.dev/docs#run-time-svelte-store">store API</a>, creating a data container that keeps <em>itself</em> in sync with the database.
    Then, if we wanted to an up-to-date display of how much credit you have, it would be as simple as:`,je=o(),d(g.$$.fragment),Ke=o(),E=a("p"),E.innerHTML=`In that example, the store is read-only, but Svelte supports read-write stores too.
    Writable stores are especially fancy because you can bind them to an HTML <em>input</em> element.
    Any time the user adjusts the input value, Svelte automatically updates the store for you.
    Since users aren&#39;t allowed to give themselves free credit (sorry), let&#39;s have a look at a volume slider instead:`,Ve=o(),d(T.$$.fragment),Ee=o(),A=a("p"),A.textContent=`With a custom store implementation, that's all it takes to get a two-way database binding.
    A volume slider that stores your preference in the database, and synchronises across tabs, days, or even devices.
    You can adjust the slider on one tab and watch it move on the other.
    Sounds like magic!`,Ae=o(),O=a("p"),O.innerHTML=`It&#39;s probably obvious by now, but none of this is hypothetical.
    I&#39;ve actually just described exactly how Lexoral handles your volume settings, behind the scenes.
    That hypothetical read-write store is real, and <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/frontend/editor/src/utils/firestoreWritable.ts">we use it in production</a>.
    Here&#39;s how we did it.`,Oe=o(),q=a("h2"),q.textContent="Ruining the magic",qe=o(),N=a("p"),N.textContent=`Our custom store wasn't some grand vision, it was built up piece-by-piece over time.
    Rather than looking at the finished product and trying to explain it to you, let's retrace our steps.
    We'll start with something simple, and add features until we get to today.`,Ne=o(),J=a("p"),J.innerHTML=`It all began as a basic read-only store, like in the credit example from earlier.
    Internally, it had a native writable store, which got updated whenever the database value changed.
    We could have written it all from scratch, but wrapping a native store means we don&#39;t have to re-create all that subscription logic - we just expose the <code>subscribe</code> method from the inner store instead:`,Je=o(),d(S.$$.fragment),Be=o(),B=a("p"),B.innerHTML=`It might look a little complicated at first, but there&#39;s really not much to it.
    We created a new class that implements the <code>Readable</code> store inferface.
    In the constructor, it accepts a reference to a Firestore document, similar to a file path.`,Ye=o(),h=a("p"),Vt=$e("For Lexoral, that's usually something like "),Qe=a("code"),Qe.textContent="/users/{uid}/settings/audio",Et=$e(` - meaning Firestore can check the current user's ID against the ID in the requested document.
    Our store then starts listening for changes to the document, and updating `),ze=a("code"),ze.textContent="remoteStore",At=$e(` when they happen.
    Any calls to `),Ue=a("code"),Ue.textContent="subscribe",Ot=$e(" are passed to the internal store, meaning all our subscribers get notified of that update."),Ge=o(),Y=a("p"),Y.textContent=`That's already pretty useful, but a writable store would be even nicer.
    Thankfully, it's not complicated to add a method that updates the database:`,Xe=o(),d(W.$$.fragment),Ze=o(),Q=a("p"),Q.innerHTML=`Those of you familiar with Svelte and its store inferface will notice that this method is called <code>commit</code> rather than <code>set</code>.
    That means it&#39;s <em>not</em> a valid <code>Writable</code> store.
    It seems strange, but it&#39;s a deliberate choice.`,et=o(),z=a("p"),z.innerHTML=`The main reason for calling the method <code>commit</code> rather than <code>set</code> is that we have <em>already</em> violated the spec.
    Notice that we enable the <code>merge</code> option when updating the database with <code>setDoc</code>.
    That means that when you call <code>commit</code> with an argument, the new value in the database <em>isn&#39;t</em> the argument you provided.
    Instead, your argument is merged with the existing data, like a patch, or a list of overrides.`,tt=o(),U=a("p"),U.innerHTML=`Compare that to the <code>Writable</code> interface - which expects the new value to be exactly what you passed in.
    It makes sense to stray from the spec here, because it&#39;s quite rare that you want to replace an entire document in Firestore.
    Much more often, you just want to edit one or two fields.
    This will be important later, but we&#39;ve got more pressing issues right now!`,it=o(),G=a("p"),G.textContent=`Currently, our store connects to the database as soon as it's created - but the user might not be authenticated yet.
    We could just accept that, and demand that no stores are created until the user is logged in, but it's easy to mess up and hard to debug.
    If we get it wrong, Firestore will start throwing errors.
    Users are only allowed to read and write their own data, but without being logged in there's no way for Firestore to check who's asking.`,st=o(),X=a("p"),X.textContent=`Instead, we'll separate the startup sequence into two steps.
    When the store is created, it won't connect to Firestore immediately.
    Then, once the user is logged in and Firebase is initialised, we can set up that database connection.
    Any attempts to update the store value before then will be rejected:`,ot=o(),d(F.$$.fragment),at=o(),Z=a("p"),Z.textContent=`Perfect!
    That store now does everything we need it to.
    It's a two-way binding to Firestore, and it doesn't even crash on startup!
    The implementation is perfect, and has no issues whatsoever, as long as you ignore the fact that it costs a fortune and the performance is terrible.
    What's up with that?`,rt=o(),ee=a("p"),ee.textContent=`With Firestore, it's vital that you limit the number of database writes.
    Every time you change something, you have to pay.
    Making things worse, Firestore can only handle about one write per second, on a given document.
    Currently, we write to the database every time the store value changes - which could be 10+ times per second.
    It'll get expensive and slow, fast.`,nt=o(),te=a("p"),te.innerHTML=`Clearly we need to reduce how often we write to the database.
    We could <em>try</em> asking the users to stop adjusting their volume so fast, but I think we can find a more robust solution!
    There&#39;s no reason why we need to push updates so often, so let&#39;s batch them up and combine all the updates into one:`,lt=o(),d(k.$$.fragment),dt=o(),ie=a("p"),ie.innerHTML=`Rather than immediately sending changes to the database, <code>commit</code> now <em>stores</em> the pending updates until <code>push</code> is called.
    You might be surprised to see that you can <code>commit</code> before setting up a database connection. 
    Since it&#39;s just updating our local state, that check has been moved to <code>push</code> instead.`,ut=o(),se=a("p"),se.innerHTML=`The internal structure of this store is getting more and more complex, so let me introduce the two new stores.
    The first, <code>stageStore</code>, contains all the updates that have been made locally but not pushed to Firestore yet.
    Meanwhile, any calls to <code>subscribe</code> are passed to <code>localStore</code>, which is derived from the other two.
    It applies the pending updates onto the current database value to create the most up-to-date view possible.`,pt=o(),oe=a("p"),oe.innerHTML=`It&#39;s not until <code>push</code> is called that we actually send anything to the database.
    It performs a single database write which combines all the commits together into one, then clears the pending store.
    By grouping the updates and only writing to the database when necessary, we reduce the cost to a fraction of what it was before, and there&#39;s no more performance bottlenecks.
    Since each user is writing to their own document, the only way to write to a document more than once a second is to use two devices simultaneously.`,mt=o(),ae=a("p"),ae.innerHTML=`Since <code>localStore</code> is the one you subscribe to, there&#39;s no visible difference between pushing updates immediately and batching them up.
    Either way, your changes are visible immediately on the current tab.
    Calling <code>push</code> just saves them to the database, meaning they are applied to all your devices.`,ct=o(),re=a("p"),re.innerHTML=`However, it&#39;s hard to know <em>when</em> to call <code>push</code>.
    If you forget, then you never save that data and it will be lost.
    If you do it too much, you&#39;re wasting money and ruining the performance.
    In general, it&#39;s just not a very ergonomic API.
    What if we automated it?`,ft=o(),d(x.$$.fragment),ht=o(),ne=a("p"),ne.textContent=`Now our changes are batched up and automatically pushed to Firestore after a period of inactivity.
    Any time we commit something, a timer is started - lasting one second by default.
    If we commit something else before then, the timer resets.
    If not, then we push the changes when the timer runs out.`,bt=o(),le=a("p"),le.textContent=`One second might not seem like very long, but you have to remember the end goal.
    We want to bind this store to a slider, which can cause 60 commits per second when you're adjusting it.
    However, you're unlikely to pause for more than a second when adjusting the volume.
    One second is a nice middle ground that ensures it rarely pushes until you're done, while still having a minimal delay.`,yt=o(),de=a("p"),de.textContent=`It's also adjustable - when creating the store, you can choose a higher or lower delay based on your use case.
    There's not much risk in setting it a bit high - pending updates are still applied to your local window instantly.
    A ten-second debounce timer would just mean a ten-second delay before your volume synchronises across devices.`,wt=o(),ue=a("p"),ue.innerHTML=`We&#39;ve talked a lot about binding this store to a volume slider, but how would that work?
    It&#39;s not a valid <code>Writable</code>, and it&#39;s not even storing a numeric value!
    Our store represents an entire Firestore document, meaning a JSON object - not exactly something you could update with a slider.`,vt=o(),pe=a("p"),pe.innerHTML=`To solve that, let&#39;s add a way to get a <code>Writable</code> stores bound to a specific <em>field</em> on the document.
    In other words, take our <code>audio settings</code> store and create a <code>volume</code> store for its volume field.
    For now, it&#39;s read-only:`,gt=o(),d($.$$.fragment),Tt=o(),me=a("p"),me.innerHTML=`We&#39;ve added a new Svelte store implementation, <code>FirestoreWritableField</code>.
    As the name suggests, it binds to a specific field on the Firestore document.
    It&#39;s not meant to be created directly by the user - instead we&#39;ve added <code>getField</code> onto the original store.`,St=o(),ce=a("p"),ce.innerHTML=`The child store is implemented using a <code>derived</code> store, which simply extracts the required field from the value of the parent store.
    Any time the parent store updates, we check to see if our field has changed, and if so, notify our subscribers.
    Despite the name of the class, it&#39;s not actually writable yet, so let&#39;s make it a valid Svelte <code>Writable</code> by adding <code>set</code> and <code>update</code>:`,Wt=o(),d(R.$$.fragment),Ft=o(),fe=a("p"),fe.textContent=`There's no need to worry about Firestore when writing these methods - we simply propagate the calls up to the parent and set the value for our field.
    That's why it was so important for us to be able to apply a partial patch to the parent store - it allows these single-field stores to be standalone.`,kt=o(),he=a("p"),he.textContent=`That store implementation is looking pretty good now!
    It's got everything we need to actually use it in an application, so let's try it out:`,xt=o(),d(I.$$.fragment),$t=o(),d(_.$$.fragment),Rt=o(),be=a("p"),be.innerHTML=`In <code>audio.ts</code>, we create a new store, binding it to the document at a specific path in Firestore.
    We set the initial values for the document, which get used if the document doesn&#39;t exist or we haven&#39;t called <code>connect</code> yet.
    The call to <code>connect</code> isn&#39;t shown in this example, since it would normally be in a post-authentication callback.`,It=o(),ye=a("p"),ye.innerHTML=`Then, in <code>Volume.svelte</code>, we extract the <code>volume</code> field from the document into its own store.
    We create a slider element, and bind its value to the volume store.
    That&#39;s all it takes to get a two-way database binding.`,_t=o(),we=a("p"),we.textContent=`Whenever the volume field updates on the Firestore document, the volume slider will jump to its new position.
    Whenever the slider is adjusted, then after one second of no further changes it will push its new value to Firestore!`,Dt=o(),ve=a("p"),ve.innerHTML=`There is still one issue with our current implementation - it&#39;s quite wasteful.
    Every time we call <code>getField</code>, it creates a new store, even though all the stores for a given field are identical.
    We can solve that by adding a cache:`,Lt=o(),d(D.$$.fragment),Mt=o(),ge=a("p"),ge.innerHTML=`With that, we&#39;re at the current version!
    I&#39;m sure we&#39;ll make more changes in future - all the <code>get_store_value</code> calls are pretty inefficient and begging to be replaced.
    However, we&#39;re nitpicking at magic by this point.`,Pt=o(),Te=a("p"),Te.textContent=`In just a few lines of code, we can create a two-way real-time database binding.
    We can cache the changes, reducing load and minimising cost.
    We can synchronise across tabs, windows, devices, and across the world.`,Ct=o(),Se=a("h2"),Se.textContent="Conclusion",Ht=o(),We=a("p"),We.innerHTML=`I&#39;m not saying that you should take our code and use it yourself (but if you want to, <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/frontend/editor/src/utils/firestoreWritable.ts">you can</a>).
    I <em>am</em> saying that cloud-native development is a crazy, magical place, where you need to think outside of the box.
    Creating our custom store implementation was a slow process, where we had a problem, fixed it, and moved on to the next one.
    There was no grand vision, just an emergent solution based on the problems we faced.`,jt=o(),Fe=a("p"),Fe.textContent=`It's easy to get stuck in the patterns of what you're used to doing.
    I'm new to cloud-native development, and a solution based on my old ways of thinking would have looked very different.
    It would be full of http calls, manual state management, and probably full of bugs too.`,Kt=o(),ke=a("p"),ke.innerHTML=`By allowing myself to think outside the box, the solution is much nicer.
    While I&#39;ve always enjoyed working <em>on</em> the data layer, I finally have one that I enjoy working <em>with</em>.`},m(e,t){i(e,n,t),i(e,b,t),i(e,l,t),i(e,y,t),i(e,w,t),i(e,Ie,t),i(e,L,t),i(e,_e,t),i(e,M,t),i(e,De,t),i(e,P,t),i(e,Le,t),i(e,C,t),i(e,Me,t),i(e,H,t),i(e,Pe,t),i(e,j,t),i(e,Ce,t),i(e,K,t),i(e,He,t),i(e,V,t),i(e,je,t),u(g,e,t),i(e,Ke,t),i(e,E,t),i(e,Ve,t),u(T,e,t),i(e,Ee,t),i(e,A,t),i(e,Ae,t),i(e,O,t),i(e,Oe,t),i(e,q,t),i(e,qe,t),i(e,N,t),i(e,Ne,t),i(e,J,t),i(e,Je,t),u(S,e,t),i(e,Be,t),i(e,B,t),i(e,Ye,t),i(e,h,t),v(h,Vt),v(h,Qe),v(h,Et),v(h,ze),v(h,At),v(h,Ue),v(h,Ot),i(e,Ge,t),i(e,Y,t),i(e,Xe,t),u(W,e,t),i(e,Ze,t),i(e,Q,t),i(e,et,t),i(e,z,t),i(e,tt,t),i(e,U,t),i(e,it,t),i(e,G,t),i(e,st,t),i(e,X,t),i(e,ot,t),u(F,e,t),i(e,at,t),i(e,Z,t),i(e,rt,t),i(e,ee,t),i(e,nt,t),i(e,te,t),i(e,lt,t),u(k,e,t),i(e,dt,t),i(e,ie,t),i(e,ut,t),i(e,se,t),i(e,pt,t),i(e,oe,t),i(e,mt,t),i(e,ae,t),i(e,ct,t),i(e,re,t),i(e,ft,t),u(x,e,t),i(e,ht,t),i(e,ne,t),i(e,bt,t),i(e,le,t),i(e,yt,t),i(e,de,t),i(e,wt,t),i(e,ue,t),i(e,vt,t),i(e,pe,t),i(e,gt,t),u($,e,t),i(e,Tt,t),i(e,me,t),i(e,St,t),i(e,ce,t),i(e,Wt,t),u(R,e,t),i(e,Ft,t),i(e,fe,t),i(e,kt,t),i(e,he,t),i(e,xt,t),u(I,e,t),i(e,$t,t),u(_,e,t),i(e,Rt,t),i(e,be,t),i(e,It,t),i(e,ye,t),i(e,_t,t),i(e,we,t),i(e,Dt,t),i(e,ve,t),i(e,Lt,t),u(D,e,t),i(e,Mt,t),i(e,ge,t),i(e,Pt,t),i(e,Te,t),i(e,Ct,t),i(e,Se,t),i(e,Ht,t),i(e,We,t),i(e,jt,t),i(e,Fe,t),i(e,Kt,t),i(e,ke,t),xe=!0},p:Bt,i(e){xe||(p(g.$$.fragment,e),p(T.$$.fragment,e),p(S.$$.fragment,e),p(W.$$.fragment,e),p(F.$$.fragment,e),p(k.$$.fragment,e),p(x.$$.fragment,e),p($.$$.fragment,e),p(R.$$.fragment,e),p(I.$$.fragment,e),p(_.$$.fragment,e),p(D.$$.fragment,e),xe=!0)},o(e){m(g.$$.fragment,e),m(T.$$.fragment,e),m(S.$$.fragment,e),m(W.$$.fragment,e),m(F.$$.fragment,e),m(k.$$.fragment,e),m(x.$$.fragment,e),m($.$$.fragment,e),m(R.$$.fragment,e),m(I.$$.fragment,e),m(_.$$.fragment,e),m(D.$$.fragment,e),xe=!1},d(e){e&&s(n),e&&s(b),e&&s(l),e&&s(y),e&&s(w),e&&s(Ie),e&&s(L),e&&s(_e),e&&s(M),e&&s(De),e&&s(P),e&&s(Le),e&&s(C),e&&s(Me),e&&s(H),e&&s(Pe),e&&s(j),e&&s(Ce),e&&s(K),e&&s(He),e&&s(V),e&&s(je),c(g,e),e&&s(Ke),e&&s(E),e&&s(Ve),c(T,e),e&&s(Ee),e&&s(A),e&&s(Ae),e&&s(O),e&&s(Oe),e&&s(q),e&&s(qe),e&&s(N),e&&s(Ne),e&&s(J),e&&s(Je),c(S,e),e&&s(Be),e&&s(B),e&&s(Ye),e&&s(h),e&&s(Ge),e&&s(Y),e&&s(Xe),c(W,e),e&&s(Ze),e&&s(Q),e&&s(et),e&&s(z),e&&s(tt),e&&s(U),e&&s(it),e&&s(G),e&&s(st),e&&s(X),e&&s(ot),c(F,e),e&&s(at),e&&s(Z),e&&s(rt),e&&s(ee),e&&s(nt),e&&s(te),e&&s(lt),c(k,e),e&&s(dt),e&&s(ie),e&&s(ut),e&&s(se),e&&s(pt),e&&s(oe),e&&s(mt),e&&s(ae),e&&s(ct),e&&s(re),e&&s(ft),c(x,e),e&&s(ht),e&&s(ne),e&&s(bt),e&&s(le),e&&s(yt),e&&s(de),e&&s(wt),e&&s(ue),e&&s(vt),e&&s(pe),e&&s(gt),c($,e),e&&s(Tt),e&&s(me),e&&s(St),e&&s(ce),e&&s(Wt),c(R,e),e&&s(Ft),e&&s(fe),e&&s(kt),e&&s(he),e&&s(xt),c(I,e),e&&s($t),c(_,e),e&&s(Rt),e&&s(be),e&&s(It),e&&s(ye),e&&s(_t),e&&s(we),e&&s(Dt),e&&s(ve),e&&s(Lt),c(D,e),e&&s(Mt),e&&s(ge),e&&s(Pt),e&&s(Te),e&&s(Ct),e&&s(Se),e&&s(Ht),e&&s(We),e&&s(jt),e&&s(Fe),e&&s(Kt),e&&s(ke)}}}function ni(Re){let n,b;return n=new Yt({props:{id:"svelte-firestore-binding",$$slots:{default:[ri]},$$scope:{ctx:Re}}}),{c(){d(n.$$.fragment)},m(l,y){u(n,l,y),b=!0},p(l,[y]){const w={};y&1&&(w.$$scope={dirty:y,ctx:l}),n.$set(w)},i(l){b||(p(n.$$.fragment,l),b=!0)},o(l){m(n.$$.fragment,l),b=!1},d(l){c(n,l)}}}class hi extends qt{constructor(n){super();Nt(this,n,null,ni,Jt,{})}}export{hi as default};
