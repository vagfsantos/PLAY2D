const createCanvas = (): getCanvasElement => {
  const canvasElement = document.createElement("canvas");

  return (): HTMLCanvasElement => canvasElement;
};

export const canvas = createCanvas();
