import { GameObjectInterface, GameObjectAttrInterface } from "../../GameObject/GameObject.interfaces";
import { GameObject } from "../../GameObject/GameObject";

export class Tile extends GameObject {
  
  constructor(tileProperties: any) {

    super()
    this.__attr.x = tileProperties.x
    this.__attr.y = tileProperties.y
    this.__attr.width = tileProperties.width
    this.__attr.height = tileProperties.height
  }

  draw(ctx: CanvasRenderingContext2D){
    
    ctx.strokeStyle = "#eee"
    ctx.strokeRect(
      this.attr.x,
      this.attr.y,
      this.attr.width,
      this.attr.height
    )
  }
}