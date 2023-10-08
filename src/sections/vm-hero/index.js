import { LitElement, css, html } from 'lit';
import { CssUtils } from '../../styles/utils.js';

export class VmHero extends LitElement {
  static styles = [
    CssUtils.get('bg'),
    css`
      section {
        height: 100vh;
      }
    `,
  ];

  render() {
    return html`
      <section class="bg-blue">
        <vm-button label="Купить"></vm-button>
      </section>
    `;
  }
}

customElements.define('vm-hero', VmHero);
