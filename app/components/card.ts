import Component from '@glimmer/component';

interface CardArgs {
  size: 'standard';
  scale: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export default class Card extends Component<CardArgs> {
  get cardSizeClass() {
    return `card-size-${this.args.size}-${this.args.scale}`;
  }
}
