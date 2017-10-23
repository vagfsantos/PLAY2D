import { GameObject, $Rect, $Arc } from "../_exports";

/*
* DrawUtil
* It provides shortcuts to draw basic primitive and basic assets into the canvas.
*/
export class DrawUtil {

  /*
  * It draws any rect in canvas, a configuration object is required
  * return a GameObject instance
  */
  static rect(ctx: CanvasRenderingContext2D, rect: $Rect): GameObject {

    let gameObject = new GameObject();
    gameObject.setConfig(rect);

    gameObject.setInit(function(){
      ctx.fillStyle = this.background;
      ctx.fillRect(
        this.x,
        this.y,
        this.width,
        this.height
      )
    });

    return gameObject;
  }

  /*
  * It draws any circle in canvas, a configuration object is required
  * return a GameObject instance
  */
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

  /*
  * It draws any animated sprite in canvas
  */
  static sprite(): GameObject {
    return new GameObject();
  }
}
