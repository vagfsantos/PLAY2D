import { canvas } from "../canvas";

const appendCanvasToDocument = (
  canvas: HTMLCanvasElement
): Function => (): any => document.body.appendChild(canvas);

export const start = appendCanvasToDocument(canvas());
