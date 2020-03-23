import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface DraggableArgs {
  x: number;
  y: number;
}

export default class Draggable extends Component<DraggableArgs> {
  mouse = service('mouse');

  @tracked x = 0;
  @tracked y = 0;
  dragOffsetX = 0;
  dragOffsetY = 0;

  get dragStyle() {
    return htmlSafe(`top: ${this.y}px; left: ${this.x}px;`);
  }

  @action
  didInsert() {
    this.x = this.args.x;
    this.y = this.args.y;
  }

  @action
  onMouseDown(event: MouseEvent) {
    this.dragOffsetX = event.clientX - this.x;
    this.dragOffsetY = event.clientY - this.y;
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('dragstart', this.stopDragStart);
  }

  @action
  onMouseUp() {
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('dragstart', this.stopDragStart);
  }

  @action
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX - this.dragOffsetX;
    this.y = event.clientY - this.dragOffsetY;
  }

  stopDragStart(event: DragEvent) {
    event.preventDefault();
  }
}
