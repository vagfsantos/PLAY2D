export const gameObject = (
  image: CanvasImageSource,
  position: Vector2d,
  size: Size
): GameObjectFunction => {
  const savedGameObject = { image, ...position, ...size };

  return (
    newPosition: Vector2d = position,
    newSize: Size = size
  ): GameObject => ({ ...savedGameObject, ...newPosition, ...newSize });
};
