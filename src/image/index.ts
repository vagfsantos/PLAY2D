export const image = (source: string): CanvasImageSource => {
  const img = new Image(20, 20);
  img.src = source;
  return img;
};
