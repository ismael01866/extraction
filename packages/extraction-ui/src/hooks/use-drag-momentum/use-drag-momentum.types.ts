import { PointerEvent } from 'react';

export type Axis = 'horizontal' | 'vertical';

export type UseDragMomentumOptions = {
  axis?: Axis;
  enabled?: boolean;
  friction?: number;
  minVelocity?: number;
  getOffset?: (el: HTMLElement, axis: Axis) => number;
  applyOffset?: (el: HTMLElement, offset: number, axis: Axis) => void;
  onSettle?: (el: HTMLElement, offset: number) => void;
  onDragMove?: (el: HTMLElement, offset: number) => void;
  onDragStart?: (el: HTMLElement) => void;
};

export type DragMomentumHandlers = {
  onPointerDown: (e: PointerEvent) => void;
  onPointerMove: (e: PointerEvent) => void;
  onPointerUp: (e: PointerEvent) => void;
  onPointerCancel: (e: PointerEvent) => void;
};
