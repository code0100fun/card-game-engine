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

export const Dragging = () => ({
  template: hbs`
    <div class="story-container">
      <DropZone class="rounded bg-blue-200 w-full demo-drag-area-lg p-2">
        <Draggable @item={{hash x=50 y=20}}>
          <Card @size="standard" @scale="lg" />
        </Draggable>
        <Draggable @item={{hash x=200 y=30}}>
          <Card @size="standard" @scale="lg" />
        </Draggable>
      </DropZone>
    </div>`,
  context: {}
});

export const Dropping = () => ({
  template: hbs`
    <div class="story-container">
      <DropZone @items={{this.itemsTop}} @dragHoverClass="border-gray-800" class="border-dashed border-2 border-transparent rounded bg-blue-200 w-full demo-drag-area-sm p-2 mb-2" as |zone|>
        <p class="text-gray-800">Items: {{zone.itemCount}}</p>
        {{#each zone.items as |item|}}
          <zone.draggable @item={{item}}>
            <div class="absolute -mt-4 ml-3 select-none font-thin text-xs z-30">x: {{item.x}} y: {{item.y}}</div>
            <Card @size={{item.size}} @scale={{item.scale}} class="relative" />
          </zone.draggable>
        {{/each}}
      </DropZone>
      <DropZone @items={{this.itemsBottom}} @dragHoverClass="border-gray-800" class="border-dashed border-2 border-transparent rounded bg-purple-200 w-full demo-drag-area-sm p-2" as |zone|>
        <p class="text-gray-800">Items: {{zone.itemCount}}</p>
        {{#each zone.items as |item|}}
          <zone.draggable @item={{item}}>
            <div class="absolute -mt-4 ml-3 select-none font-thin text-xs z-30">x: {{item.x}} y: {{item.y}}</div>
            <Card @size={{item.size}} @scale={{item.scale}} />
          </zone.draggable>
        {{/each}}
      </DropZone>
    </div>`,
  context: {
    itemsTop: [{ size: 'standard', scale: 'lg', x: 100, y: 10 }],
    itemsBottom: [{ size: 'standard', scale: 'lg', x: 150, y: 10 }]
  }
});

export const Snapping = () => ({
  template: hbs`
    <div class="story-container">
      <DropZone @snap={{true}} @items={{this.itemsTop}} @dragHoverClass="border-gray-800" class="border-dashed border-2 border-transparent rounded bg-blue-200 w-full demo-drag-area-sm p-2 mb-2" as |zone|>
        <div class="flex flex-row">
          <p class="text-gray-800 mr-2">Items: {{zone.itemCount}}</p>
          {{#each zone.items as |item|}}
            <zone.draggable @item={{item}}>
              {{#if item.placeholder}}
                <Card @size={{item.size}} @scale={{item.scale}} @placeholder={{true}} class="mx-1 border-dashed border-2 border-gray-800" />
              {{else}}
                <div class="absolute -mt-4 ml-3 select-none font-thin text-xs z-30">x: {{item.x}} y: {{item.y}}</div>
                <Card @size={{item.size}} @scale={{item.scale}} @image={{item.image}} class="mx-1" />
              {{/if}}
            </zone.draggable>
          {{/each}}
        </div>
      </DropZone>
      <DropZone @snap={{true}} @items={{this.itemsBottom}} @dragHoverClass="border-gray-800" class="border-dashed border-2 border-transparent rounded bg-purple-200 w-full demo-drag-area-sm p-2" as |zone|>
        <div class="flex flex-row">
          <p class="text-gray-800 mr-2">Items: {{zone.itemCount}}</p>
          {{#each zone.items as |item|}}
            <zone.draggable @item={{item}}>
              {{#if item.placeholder}}
                <Card @size={{item.size}} @scale={{item.scale}} @placeholder={{true}} class="mx-1 border-dashed border-2 border-gray-800" />
              {{else}}
                <div class="absolute -mt-4 ml-3 select-none font-thin text-xs z-30">x: {{item.x}} y: {{item.y}}</div>
                <Card @size={{item.size}} @scale={{item.scale}} @image={{item.image}} class="mx-1" />
              {{/if}}
            </zone.draggable>
          {{/each}}
        </div>
      </DropZone>
    </div>`,
  context: {
    itemsTop: [
      {
        size: 'standard',
        scale: 'lg',
        image: 'https://lcgcdn.s3.amazonaws.com/mc/MC01en_1A.jpg'
      },
      {
        size: 'standard',
        scale: 'lg',
        image: 'https://lcgcdn.s3.amazonaws.com/mc/MC04en_6.jpg'
      }
    ],
    itemsBottom: [
      {
        size: 'standard',
        scale: 'lg',
        image: 'https://lcgcdn.s3.amazonaws.com/mc/MC01en_21.jpg'
      },
      {
        size: 'standard',
        scale: 'lg',
        image: 'https://lcgcdn.s3.amazonaws.com/mc/MC04en_25.jpg'
      }
    ]
  }
});
