import { css, html, LitElement } from 'lit';
import { Ripple } from '../../lib/ripple/index.js';

export const VmButtonSize = {
  Small: 'small',
  Default: 'default',
  Large: 'large',
};

export class VmButton extends LitElement {
  static get properties() {
    return {
      label: { type: String, reflect: true },
      block: { type: Boolean, reflect: true },
      outlined: { type: Boolean, reflect: true },
      color: { type: String, reflect: true },
      size: { type: String, reflect: true },
    };
  }

  static styles = css`
    button {
      border: none;
      cursor: pointer;
      font-size: 20px;
      font-weight: 800;
      font-family: 'Cormorant', serif;
    }

    button:hover {
      opacity: 0.8;
    }

    button.block {
      width: 100%;
    }

    button.outlined:hover {
      opacity: 1;
      background: var(--vm-orange);
    }

    button.color--orange {
      background: var(--vm-orange);
      color: var(--vm-blue);
    }

    button.outlined {
      background: transparent;
      border: 1px solid var(--vm-orange);
    }

    button.color--blue {
      background: var(--vm-blue);
      color: var(--vm-white);
      border: none;
    }

    button.color-blue:hover {
      opacity: 0.9;
    }

    button.size--small {
      padding: 13px 33px;
    }

    button.size--default {
      padding: 20px 56px;
    }

    button.size--large {
      padding: 20px 96px;
    }

    ${Ripple.styles}
  `;

  constructor() {
    super();
    this.label = '';
    this.block = false;
    this.outlined = false;
    this.color = 'orange';
    this.size = VmButtonSize.Default;
  }

  onClick(e) {
    Ripple.handler(e);
  }

  render() {
    const classes = [];

    if (this.block) {
      classes.push('block');
    }

    if (this.outlined) {
      classes.push('outlined');
    }

    if (this.dark) {
      classes.push('dark');
    }

    classes.push(`size--${this.size}`);

    classes.push(`color--${this.color}`);

    return html`<button
      type="button"
      class="vm-button ${classes.join(' ')}"
      @click=${this.onClick}
    >
      ${this.label}
    </button> `;
  }
}

export const ButtonTag = 'vm-button';

customElements.define(ButtonTag, VmButton);
