interface GameObject {
  image: CanvasImageSource;
  width: number;
  height: number;
  x: number;
  y: number;
}

interface GameObjectFunction {
  (newPosition?: Vector2d, newSize?: Size): GameObject;
}
