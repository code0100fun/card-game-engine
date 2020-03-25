import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Dragging from '../services/dragging';
import Draggable from '../components/draggable';

interface DropZoneArgs {
  dragHoverClass: string;
  items: any[];
  snap: boolean;
}

export interface Point {
  x: number;
  y: number;
}

export default class DropZone extends Component<DropZoneArgs> {
  @service('dragging') dragging: Dragging;

  @tracked mouseOver = false;
  @tracked items: any[] | null = null;
  el: HTMLElement | null = null;
  draggables: Draggable[] = [];

  get dragHover() {
    return this.mouseOver && this.dragging.currentDragItem !== null;
  }

  get snap(): boolean {
    return this.args.snap;
  }

  get itemCount(): number {
    let count = 0;
    this.items?.forEach(item => {
      if (!item.placeholder && this.dragging.currentDragItem !== item) {
        count++;
      }
    });
    return count;
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

  addDraggable(draggable: Draggable) {
    this.draggables.push(draggable);
  }

  removeDraggable(draggable: Draggable) {
    this.draggables.removeObject(draggable);
  }

  recalculateDraggables() {
    this.draggables.forEach(d => d.recalculatePosition());
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
