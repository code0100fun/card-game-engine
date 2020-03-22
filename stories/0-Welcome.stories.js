import { hbs } from "ember-cli-htmlbars";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Welcome"
};

export const ToStorybook = () => ({
  template: hbs`
    <div>
      <h3> Welcome to Storybook! </h3>
      <button type="button" {{on "click" (fn this.onClick)}}> Button example </button>
    </div>
  `,
  context: {
    onClick: linkTo("Button")
  }
});

ToStorybook.story = {
  name: "Storybook"
};
