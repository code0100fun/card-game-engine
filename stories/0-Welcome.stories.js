import { hbs } from 'ember-cli-htmlbars';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Welcome'
};

export const ToStorybook = () => ({
  template: hbs`
    <div class="story-container">
      <h3 class="mb-2"> Welcome to Storybook! </h3>
      <button class="btn btn-blue" type="button" {{on "click" (fn this.onClick)}}> Button example </button>
    </div>
  `,
  context: {
    onClick: linkTo('Button')
  }
});

ToStorybook.story = {
  name: 'Storybook'
};
