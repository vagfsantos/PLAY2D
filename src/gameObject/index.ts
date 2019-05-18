export const gameObject = (
  image: CanvasImageSource,
  position: Vector2d,
  size: Size
): GameObjectFunction => {
  const gameObject = { image, ...position, ...size };

  return (
    newPosition: Vector2d = position,
    newSize: Size = size
  ): GameObject => ({ ...gameObject, ...newPosition, ...newSize });
};
