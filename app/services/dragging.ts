import Service from '@ember/service';
import DropZone from '../components/drop-zone';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';

export default class Dragging extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @tracked currentDropZone: DropZone | null = null;
  @tracked currentDragItem: any | null = null;

  enterDropZone(dropZone: DropZone) {
    this.currentDropZone = dropZone;
  }

  leaveDropZone(_dropZone: DropZone) {
    this.currentDropZone = null;
  }

  startDrag(item: any, _dropZone: DropZone) {
    this.currentDragItem = item;
  }

  endDrag(item: any, dropZone: DropZone) {
    if (!item || !dropZone) {
      return;
    }
    if (this.currentDropZone) {
      const index = dropZone.items?.indexOf(item);
      if (index != -1) {
        dropZone.items?.removeAt(index!);
        dropZone.items = dropZone.items;
      }
      const originalOffset = dropZone.offset;
      const newOffset = this.currentDropZone.offset;
      const x = item.x + (originalOffset.x - newOffset.x);
      const y = item.y + (originalOffset.y - newOffset.y);
      set(item, 'x', x);
      set(item, 'y', y);
      this.currentDropZone.items?.push(item);
      this.currentDropZone.items = this.currentDropZone.items;
    }
    this.currentDragItem = null;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    dragging: Dragging;
  }
}
