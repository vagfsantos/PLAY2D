import { GameObject, $Rect, $Arc } from "../_exports";

export class DrawUtil {

  static rect(ctx: CanvasRenderingContext2D, rect: $Rect): GameObject {

    let gameObject = new GameObject();
    gameObject.setInit(function(){
      ctx.fillStyle = rect.background;
      ctx.fillRect(
        rect.x,
        rect.y,
        rect.width,
        rect.height
      )
    });

    return gameObject;
  }

  static arc(ctx: CanvasRenderingContext2D, arc: $Arc): GameObject {

    let gameObject = new GameObject();
    gameObject.setInit(function(){
      ctx.beginPath();
      ctx.fillStyle = arc.background;
      ctx.arc(arc.x, arc.y, arc.radius, arc.startAngle, arc.endAngle, arc.anticlockwise);
      ctx.fill();
    });

    return gameObject;
  }

  static sprite(): GameObject {
    return new GameObject();
  }
}
