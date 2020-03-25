import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { inject as service } from '@ember/service';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Dragging from '../services/dragging';
import DropZone from './drop-zone';

interface DraggableArgs {
  x: number;
  y: number;
  item: any;
  dropZone: DropZone;
}

export default class Draggable extends Component<DraggableArgs> {
  @service('dragging') dragging: Dragging;

  @tracked x = 0;
  @tracked y = 0;
  @tracked isDragging = false;
  dragOffsetX = 0;
  dragOffsetY = 0;
  el: HTMLElement | null = null;

  get dragStyle() {
    return htmlSafe(`top: ${this.y}px; left: ${this.x}px;`);
  }

  get dragSnapClass() {
    return this.isAbsolutePosition ? 'absolute' : '';
  }

  get isAbsolutePosition() {
    return !this.args.dropZone?.snap || this.isDragging;
  }

  recalculatePosition() {
    if (!this.isAbsolutePosition) {
      this.x = this.el!.offsetLeft;
      this.y = this.el!.offsetTop;
      set(this.args.item, 'x', this.x);
      set(this.args.item, 'y', this.y);
    }
  }

  @action
  didInsert(el: HTMLElement) {
    this.el = el;
    this.x = this.args.item.x || 0;
    this.y = this.args.item.y || 0;
    if (this.args.dropZone) {
      this.args.dropZone.addDraggable(this);
    }
    this.recalculatePosition();
  }

  willDestroy() {
    if (this.args.dropZone) {
      this.args.dropZone.removeDraggable(this);
    }
  }

  @action
  onMouseDown(event: MouseEvent) {
    this.recalculatePosition();
    this.isDragging = true;
    this.dragOffsetX = event.clientX - this.x;
    this.dragOffsetY = event.clientY - this.y;
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('dragstart', this.stopDragStart);

    this.dragging.startDrag(this.args.item, this.args.dropZone);
  }

  @action
  onMouseUp(_event: MouseEvent) {
    this.isDragging = false;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('dragstart', this.stopDragStart);

    this.dragging.endDrag(this.args.item, this.args.dropZone);
  }

  @action
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX - this.dragOffsetX;
    this.y = event.clientY - this.dragOffsetY;
    set(this.args.item, 'x', this.x);
    set(this.args.item, 'y', this.y);
    this.dragging.dragMove(this.args.item, this.args.dropZone);
  }

  stopDragStart(event: DragEvent) {
    event.preventDefault();
  }
}
