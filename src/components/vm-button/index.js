import { css, html, LitElement } from 'lit';

/**
 * @attrs label     Button text.
 *
 * @tag   vm-button
 */
export class VmButton extends LitElement {
  static get properties() {
    return {
      label: { type: String, reflect: true },
      block: { type: Boolean, reflect: true },
      outlined: { type: Boolean, reflect: true },
      color: { type: String, reflect: true },
    };
  }

  static styles = css`
    button {
      border: none;
      cursor: pointer;
      padding: 20px 56px;
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

    button.color-orange {
      background: var(--vm-orange);
      color: var(--vm-blue);
    }

    button.outlined {
      background: transparent;
      border: 1px solid var(--vm-orange);
    }

    button.color-blue {
      background: var(--vm-blue);
      color: var(--vm-white);
      border: none;
    }

    button.color-blue:hover {
      opacity: 0.9;
    }
  `;

  constructor() {
    super();
    this.label = '';
    this.block = false;
    this.outlined = false;
    this.color = 'orange';
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

    classes.push(`color-${this.color}`);

    return html`<button type="button" class="vm-button ${classes.join(' ')}">
      ${this.label}
    </button> `;
  }
}

export const ButtonTag = 'vm-button';

customElements.define(ButtonTag, VmButton);
