import { canvas } from "./../canvas";

const getContext2d = (c: HTMLCanvasElement) => () => c.getContext("2d");

export const context2d = getContext2d(canvas());
