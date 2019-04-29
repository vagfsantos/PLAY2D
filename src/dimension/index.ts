export const dimension = (
  canvas: HTMLCanvasElement,
  dimension: Dimension
): HTMLCanvasElement => (
  (canvas.width = dimension.width), (canvas.height = dimension.height), canvas
);
