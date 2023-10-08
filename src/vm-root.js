import { LitElement, html, css } from 'lit';

// const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class VRoot extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css``;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html``;
  }
}

customElements.define('vmyltsev-books', VRoot);
