export class GameObject {

  update() {

  }

  draw(ctx: CanvasRenderingContext2D) {

    ctx.fillStyle = '#000'
    ctx.fillRect(0,0,50,50)
  }
}