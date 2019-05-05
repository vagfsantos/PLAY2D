import { canvas } from "./../canvas/index";

const getContext2d = (
  canvas: HTMLCanvasElement
): Function => (): CanvasRenderingContext2D => canvas.getContext("2d");

export const context2d = getContext2d(canvas());
