import { hbs } from 'ember-cli-htmlbars';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Card Game Engine'
};

export const ToCardGameEngine = () => ({
  template: hbs`
    <div class="story-container">
      <MarkdownToHtml @markdown={{this.markdown}} class="markdown" @extensions={{"highlight"}} />
    </div>
  `,
  context: {
    markdown: `
# Card Game Engine
> the best

## Code Highlighting

JavaScript:
\`\`\`javascript
function example() {
  console.log('example');
}
\`\`\`
HTML:
\`\`\`html
<DropZone @items={{this.items}} />
\`\`\`
    `
  }
});

ToCardGameEngine.story = {
  name: 'Intro'
};
