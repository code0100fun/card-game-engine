import { hbs } from "ember-cli-htmlbars";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button"
};

export const Text = () => ({
  template: hbs`
    <button type="button" {{on "click" (fn this.onClick)}}>
      Example Button
    </button>`,
  context: {
    onClick: action("clicked")
  }
});

export const Emoji = () => ({
  template: hbs`
    <button type="button" {{on "click" (fn this.onClick)}}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  `,
  context: {
    onClick: action("clicked")
  }
});
