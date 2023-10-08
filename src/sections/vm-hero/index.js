import { LitElement, css, html } from 'lit';
import { VmCssUtils } from '../../styles/utils.js';

export class VmHero extends LitElement {
  static styles = [
    VmCssUtils.get('bg'),
    css`
      section {
        height: 100vh;
      }
    `,
  ];

  render() {
    return html` <section class="bg-blue"></section> `;
  }
}

customElements.define('vm-hero', VmHero);
