export const gameObject = (
  image: CanvasImageSource,
  position: Vector2d,
  size: Size
): GameObject => ({ image, ...position, ...size });
