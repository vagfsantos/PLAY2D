import { createCanvas } from "../createCanvas";
import { dimension } from "../dimension";

export const createGame = (width: number, height: number): Function => {
  const canvas = dimension(createCanvas(), { width, height });

  return (command: Function): HTMLCanvasElement => (command(canvas), canvas);
};
