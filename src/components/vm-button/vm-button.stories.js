// Button.stories.js

import { html } from 'lit';
import { VmButtonSize } from './index.js';

export default {
  component: 'vm-button',
};

export const Label = {
  args: {
    text: 'Текст кнопки',
  },
  render: ({ text }) => html`<vm-button label="${text}"></vm-button>`,
};

export const Block = {
  args: {
    block: true,
  },
  render: ({ block }) =>
    html`<vm-button label="Текст кнопки" ?block="${block}"></vm-button>`,
};

export const Outlined = {
  args: {
    outlined: true,
  },
  render: ({ outlined }) =>
    html`<vm-button label="Текст кнопки" ?outlined="${outlined}"></vm-button>`,
};

export const Colors = {
  argTypes: {
    color: {
      type: 'select',
      options: ['orange', 'blue'],
    },
  },
  args: {
    color: 'blue',
  },
  render: ({ color }) =>
    html`
      <div>
        <vm-button label="Текст кнопки"></vm-button>
      </div>
      <hr />
      <div>
        <vm-button label="Текст кнопки" color=${color}></vm-button>
      </div>
    `,
};

export const Sizes = {
  argTypes: {
    size: {
      type: 'select',
      options: Object.values(VmButtonSize),
    },
  },
  args: {
    size: VmButtonSize.Default,
  },
  render: ({ size }) => html`
    <vm-button label="Текст кнопки" size=${size}></vm-button>
  `,
};
