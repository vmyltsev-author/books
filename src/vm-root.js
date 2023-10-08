import { LitElement, html, css } from 'lit';

class VRoot extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div>
        <h1>Test</h1>
        <vm-button label="Текст кнопки"></vm-button>
      </div>
    `;
  }
}

customElements.define('vm-root', VRoot);
