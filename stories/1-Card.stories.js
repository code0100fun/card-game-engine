import { hbs } from 'ember-cli-htmlbars';
// import { action } from '@storybook/addon-actions';

export default {
  title: 'Card'
};

export const Sizes = () => ({
  template: hbs`
    <div class="story-container flex flex-col">
      <div class="py-1">
        <h2>XS</h2>
        <Card @size="standard" @scale="xs" />
      </div>
      <div class="py-1">
        <h2>SM</h2>
        <Card @size="standard" @scale="sm" />
      </div>
      <div class="py-1">
        <h2>MD</h2>
        <Card @size="standard" @scale="md" />
      </div>
      <div class="py-1">
        <h2>LG</h2>
        <Card @size="standard" @scale="lg" />
      </div>
      <div class="py-1">
        <h2>XL</h2>
        <Card @size="standard" @scale="xl" />
      </div>
      <div class="py-1">
        <h2>2XL</h2>
        <Card @size="standard" @scale="2xl" />
      </div>
      <div class="py-1">
        <h2>3XL</h2>
        <Card @size="standard" @scale="3xl" />
      </div>
      <div class="py-1">
        <h2>4XL</h2>
        <Card @size="standard" @scale="4xl" />
      </div>
      <div class="py-1">
        <h2>5XL</h2>
        <Card @size="standard" @scale="5xl" />
      </div>
    </div>`,
  context: {}
});
