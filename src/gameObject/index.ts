export const gameObject = (...attrs: any[]): Function => {
  const object = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    ...attrs.reduce((result, current) => ({ ...result, ...current }), {})
  };

  return (ctx: CanvasRenderingContext2D, renderType: string): void => {
    ctx.fillRect(object.x, object.y, object.width, object.height);
  };
};
