import { context2d } from "./../context2d";

const getPainter = (ctx: CanvasRenderingContext2D) => (
  go: GameObject
): void => {
  ctx.drawImage(go.image, go.x, go.y, go.width, go.height);
};

export const paint = getPainter(context2d());
