export const image = (source: string): HTMLImageElement => {
  const img = new Image();
  img.src = source;
  return img;
};
