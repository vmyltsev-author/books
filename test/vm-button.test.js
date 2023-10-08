import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/components/vm-button/index.js';

describe('<vm-button />', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<vm-button label="test"></vm-button>`);
  });

  it('renders a button with text', () => {
    const button = element.shadowRoot.querySelector('button');
    expect(button).to.exist;
    expect(button.textContent.trim()).to.equal('test');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
