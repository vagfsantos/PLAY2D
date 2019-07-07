import { canvas } from "../canvas";

const updateScreenSize = (c: HTMLCanvasElement) => (size: Size): void => {
  c.width = size.width;
  c.height = size.height;
};

export const screen = updateScreenSize(canvas());
