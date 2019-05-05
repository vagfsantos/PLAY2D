import { canvas } from "../canvas";

export const canvasWith = ((canvas: HTMLCanvasElement): Function => (
  width: number,
  height: number
): any => ((canvas.width = width), (canvas.height = height)))(canvas());
