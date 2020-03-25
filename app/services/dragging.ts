import Service from '@ember/service';
import DropZone, { Point } from '../components/drop-zone';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';
import { next } from '@ember/runloop';

export default class Dragging extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @tracked currentDropZone: DropZone | null = null;
  @tracked currentDragItem: any | null = null;

  enterDropZone(dropZone: DropZone) {
    this.currentDropZone = dropZone;
  }

  leaveDropZone(dropZone: DropZone) {
    this.currentDropZone = null;
    if (this.currentDragItem) {
      this.removePlaceholders(dropZone);
    }
    next(null, () => {
      dropZone.recalculateDraggables();
    });
  }

  removePlaceholders(dropZone: DropZone) {
    if (dropZone.items) {
      const items = dropZone.items.filter(item => !item.placeholder);
      set(dropZone, 'items', items);
    }
  }

  findPlaceholders(dropZone: DropZone) {
    const placeholders: number[] = [];
    if (dropZone.items) {
      dropZone.items.forEach((item, i) => {
        if (item.placeholder) {
          placeholders.push(i);
        }
      });
    }
    return placeholders;
  }

  findClosestIndex(
    item: any,
    parentZone: DropZone,
    targetZone: DropZone
  ): number {
    let d2 = Infinity;
    let index = 0;
    let allDistances: number[] = [];
    const { x, y } = this.translateToZone(item, parentZone, targetZone);
    targetZone.items?.forEach((otherItem, i) => {
      if (otherItem === item) {
        // ignore dragging card
        allDistances[i] = Infinity;
        return;
      }
      let dx = Math.pow(otherItem.x - x, 2);
      let dy = Math.pow(otherItem.y - y, 2);
      let d2Other = Math.sqrt(dx + dy);
      if (d2Other < d2) {
        d2 = d2Other;
        index = i;
      }
      allDistances[i] = d2Other;
    });
    let dLeft = Infinity;
    let dRight = Infinity;

    if (typeof allDistances[index - 1] === 'number') {
      dLeft = allDistances[index - 1];
    }
    if (typeof allDistances[index + 1] === 'number') {
      dRight = allDistances[index + 1];
    }
    if (dLeft === Infinity && dRight > 10) {
      return 0;
    } else if (dRight === Infinity && dLeft > 10) {
      return index + 1;
    } else {
      return index;
    }
  }

  startDrag(item: any, dropZone: DropZone | null) {
    this.currentDragItem = item;
    if (dropZone && dropZone.snap && dropZone.items) {
      const index = dropZone.items?.indexOf(item)!;
      if (index > -1) {
        this.insertPlaceholder(index, item, dropZone);
      }
    }
  }

  insertPlaceholder(index: number, item: any, dropZone: DropZone) {
    const placeholder = { placeholder: true, ...item };
    dropZone.items = dropZone.items!.filter(Boolean);
    if (index >= dropZone.items!.length) {
      dropZone.items?.push(placeholder);
    } else {
      dropZone.items?.insertAt(index, placeholder);
    }

    next(null, () => {
      dropZone.recalculateDraggables();
    });
  }

  dragMove(item: any, dropZone: DropZone) {
    if (this.currentDropZone && this.currentDropZone.snap) {
      const index = this.findClosestIndex(item, dropZone, this.currentDropZone);
      const placeholders = this.findPlaceholders(this.currentDropZone);
      if (placeholders.length > 0) {
        if (!placeholders.includes(index)) {
          const toRemove = placeholders[0];
          const adjIndex = toRemove < index ? index - 1 : index;
          this.removePlaceholders(this.currentDropZone);
          this.insertPlaceholder(adjIndex, item, this.currentDropZone);
        }
      } else {
        this.insertPlaceholder(index, item, this.currentDropZone);
      }
    }
  }

  translateToZone(point: Point, from: DropZone, to: DropZone): Point {
    const originalOffset = from.offset;
    const newOffset = to.offset;
    const x = point.x + (originalOffset.x - newOffset.x);
    const y = point.y + (originalOffset.y - newOffset.y);
    return { x, y };
  }

  endDrag(item: any, dropZone: DropZone) {
    if (!item || !dropZone) {
      return;
    }
    if (this.currentDropZone) {
      const removeIndex = dropZone.items?.indexOf(item);
      if (removeIndex != -1) {
        dropZone.items?.removeAt(removeIndex!);
        dropZone.items = dropZone.items;
      }
      const { x, y } = this.translateToZone(
        item,
        dropZone,
        this.currentDropZone
      );
      set(item, 'x', x);
      set(item, 'y', y);

      const placeholders = this.findPlaceholders(this.currentDropZone);
      let insertIndex;
      if (placeholders.length > 0) {
        // if there is a drag placeholder then use that index
        insertIndex = placeholders[0];
        this.removePlaceholders(this.currentDropZone);
      } else {
        // or just compute it
        insertIndex = this.findClosestIndex(
          item,
          dropZone,
          this.currentDropZone
        );
      }

      this.currentDropZone.items?.insertAt(insertIndex, item);
      this.currentDropZone.items = this.currentDropZone.items;
    }
    this.currentDragItem = null;
    this.removePlaceholders(dropZone);
    next(null, () => {
      dropZone.recalculateDraggables();
      if (this.currentDropZone && this.currentDropZone !== dropZone) {
        this.currentDropZone!.recalculateDraggables();
      }
    });
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    dragging: Dragging;
  }
}
