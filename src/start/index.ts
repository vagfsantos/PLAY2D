import { canvas } from "../canvas";

const appendCanvasToDocument = (c: HTMLCanvasElement) => (): void => {
  document.body.appendChild(c);
};

export const start = appendCanvasToDocument(canvas());
