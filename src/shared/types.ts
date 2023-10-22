export interface IntrinsicAttributes {
  id?: string;
  className?: unknown;
  style?: unknown;
  draggable?: boolean;
  onClick?: (evt: MouseEvent, navigateFn: () => void) => void;
  onDblclick?: (evt: MouseEvent, navigateFn: () => void) => void;
  onMouseover?: (ev?: MouseEvent) => void;
  onMouseout?: (ev?: MouseEvent) => void;
  onMouseup?: (ev?: MouseEvent) => void;
  onMousedown?: (ev?: MouseEvent) => void;
  onMouseenter?: (ev?: MouseEvent) => void;
  onMouseleave?: (ev?: MouseEvent) => void;
  onAnimationstart?: (ev?: AnimationEvent) => void;
  onAnimationiteration?: (ev?: AnimationEvent) => void;
  onAnimationend?: (ev?: AnimationEvent) => void;
  onDrag?: (ev?: DragEvent) => void;
  onDragend?: (ev?: DragEvent) => void;
  onDragenter?: (ev?: DragEvent) => void;
  onDragleave?: (ev?: DragEvent) => void;
  onDragover?: (ev?: DragEvent) => void;
  onDragstart?: (ev?: DragEvent) => void;
  onDrop?: (ev?: DragEvent) => void;
  onKeydown?: (ev?: KeyboardEvent) => void;
  onKeypress?: (ev?: KeyboardEvent) => void;
  onKeyup?: (ev?: KeyboardEvent) => void;
}

export interface File {
  created_at?: String;
  created_by?: String;
  id?: String;
  mime_type: String;
  name: String;
  size: Number;
  url?: String;
  updated_by?: String;
  updated_at?: String;
}
