declare module "svelte-simple-modal" {
  export default class Modal {
    $$prop_def: {
      show?: any;
      key?: string;
    }
  }
}

declare module "fontawesome-svelte" {
  export class FontAwesomeIcon {
    $$prop_def: {
      icon: string
    }
  }
}