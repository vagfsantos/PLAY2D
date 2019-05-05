import { context2d } from "./../context2d/index";

const getPainter = (ctx: CanvasRenderingContext2D): Function => (
  go: GameObject
): any => ctx.drawImage(go.image, go.x, go.y, go.width, go.height);

export const paint = getPainter(context2d());
