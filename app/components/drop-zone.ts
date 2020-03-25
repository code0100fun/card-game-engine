import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Dragging from '../services/dragging';

interface DropZoneArgs {
  dragHoverClass: string;
  items: any[];
  snap: boolean;
}

interface Point {
  x: number;
  y: number;
}

export default class DropZone extends Component<DropZoneArgs> {
  @service('dragging') dragging: Dragging;

  @tracked mouseOver = false;
  @tracked items: any[] | null = null;
  el: HTMLElement | null = null;

  get dragHover() {
    return this.mouseOver && this.dragging.currentDragItem !== null;
  }

  get snap(): boolean {
    return this.args.snap;
  }

  @action
  didInsert(el: HTMLElement) {
    this.items = this.args.items;
    this.el = el;
  }

  get offset(): Point {
    const el = this.el as HTMLElement;
    return { x: el.offsetLeft, y: el.offsetTop };
  }

  @action
  onMouseEnter() {
    this.mouseOver = true;
    this.dragging.enterDropZone(this);
  }

  @action
  onMouseLeave() {
    this.mouseOver = false;
    this.dragging.leaveDropZone(this);
  }
}
