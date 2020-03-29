import { hbs } from 'ember-cli-htmlbars';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Intro'
};

export const ToCardGameEngine = () => ({
  template: hbs`
    <div class="story-container">
      <h3 class="mb-2">Card Game Engine</h3>
    </div>
  `,
  context: {}
});

ToCardGameEngine.story = {
  name: 'Card Game Engine'
};
