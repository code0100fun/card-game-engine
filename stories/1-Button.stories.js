import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button'
};

export const Text = () => ({
  template: hbs`
    <div class="story-container">
      <button class="btn btn-blue" type="button" {{on "click" (fn this.onClick)}}>
        Example Button
      </button>
    </div>`,
  context: {
    onClick: action('clicked')
  }
});

export const Outline = () => ({
  template: hbs`
    <div class="story-container">
      <button class="btn btn-outline-dark" type="button" {{on "click" (fn this.onClick)}}>
        Example Button
      </button>
    </div>
  `,
  context: {
    onClick: action('clicked')
  }
});

export const Emoji = () => ({
  template: hbs`
    <div class="story-container">
      <button class="btn btn-outline-dark" type="button" {{on "click" (fn this.onClick)}}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </button>
    </div>
  `,
  context: {
    onClick: action('clicked')
  }
});
