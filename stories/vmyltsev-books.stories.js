import { html } from 'lit';
import '../src/vmyltsev-books.js';

export default {
  title: 'VmyltsevBooks',
  component: 'vmyltsev-books',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <vmyltsev-books
      style="--vmyltsev-books-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </vmyltsev-books>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
