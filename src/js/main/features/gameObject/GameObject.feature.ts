import {
    $Rect,
    $Arc
} from './GameObject.interfaces';

export class GameObject {

    createRect(ctx: CanvasRenderingContext2D, rect: $Rect) {
      ctx.fillStyle = rect.background;
      ctx.fillRect(
        rect.x,
        rect.y,
        rect.width,
        rect.height
      )
    }

    createArc(ctx: CanvasRenderingContext2D, arc: $Arc) {
      ctx.beginPath();
      ctx.fillStyle = arc.background;
      ctx.arc(arc.x, arc.y, arc.radius, arc.startAngle, arc.endAngle, arc.anticlockwise);
      ctx.fill();
    }

    createSprite() {

    }
}
