import { LitElement, html, css } from 'lit';

class VRoot extends LitElement {
  static styles = css``;

  render() {
    return html`
      <main>
        <vm-hero></vm-hero>
      </main>
      <footer></footer>
    `;
  }
}

customElements.define('vm-root', VRoot);
