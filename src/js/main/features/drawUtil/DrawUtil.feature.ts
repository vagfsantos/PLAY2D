import { GameObject, $Rect, $Arc, Canvas } from "../_exports";

/*
* DrawUtil
* It provides shortcuts to draw basic primitive and basic assets into the canvas.
*/
export class DrawUtil {

  /*
  * It draws any rect in canvas, a configuration object is required
  * return a GameObject instance
  */
  static rect(rect: $Rect): GameObject {

    let gameObject = new GameObject();
    gameObject.setConfig(rect);
    gameObject.setInit(function(){
      Canvas.ctx.fillStyle = this.background;
      Canvas.ctx.fillRect(
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
  static arc(arc: $Arc): GameObject {

    let gameObject = new GameObject();
    gameObject.setInit(function(){
      Canvas.ctx.beginPath();
      Canvas.ctx.fillStyle = arc.background;
      Canvas.ctx.arc(arc.x, arc.y, arc.radius, arc.startAngle, arc.endAngle, arc.anticlockwise);
      Canvas.ctx.fill();
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
