import { context2d } from "./../context2d/index";
export const paint = (canvas: HTMLCanvasElement, draw: Function): void => {
  const ctx = context2d(canvas);
  draw(ctx);
};
