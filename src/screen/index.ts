import { canvas } from "../canvas";

export const screen = ((canvas: HTMLCanvasElement): Function => ({
  width,
  height
}: Size): void => {
  canvas.width = width;
  canvas.height = height;
})(canvas());
