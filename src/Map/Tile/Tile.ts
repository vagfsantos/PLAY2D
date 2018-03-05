import { GameObjectInterface, GameObjectAttrInterface } from "../../GameObject/GameObject.interfaces";
import { GameObject } from "../../GameObject/GameObject";

/**
 * Creates tiles objects of maps
 * Extends a game object
 */
export class Tile extends GameObject {
  
  /**
   * Requires a tile properties
   */
  constructor(tileProperties: any) {

    super()
    this.__attr.x = tileProperties.x
    this.__attr.y = tileProperties.y
    this.__attr.width = tileProperties.width
    this.__attr.height = tileProperties.height
  }

  /**
   * Overwrites the draw method of the game objects
   * Draws the tiles on screen for sake of debug
   */
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