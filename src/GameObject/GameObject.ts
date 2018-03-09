import { GameObjectInterface, GameObjectAttrInterface } from "./GameObject.interfaces";
import { Colider } from "../Colider/Colider";

export class GameObject {
  
  /**
   * Custom atrributes of an game object
   */
  __attr: any = {}
  
  __coliderAreas : Colider[] = []
  __debugMode: boolean = false

  /**
   * Methods to be performed before each frame
   */
  __onUpdateActions: Function[] = []

  /**
   * Methods to be that draws a game object each frame
   */
  __onDrawActions: Function[] = []
  

  /**
   * Update the __attr attribute 
   */
  set attr(object: any) {
    
    for(let key in object) {
      
      this.__attr[key] = object[key]
    }
  }

  /**
   * Retrives the __attr attribute 
   */
  get attr() {

    return this.__attr
  }

  addColiderBox(coliderInfo: any) {

    let colider = new Colider()

    colider.x = coliderInfo.x
    colider.y = coliderInfo.y
    colider.width = coliderInfo.width
    colider.height = coliderInfo.height

    this.__coliderAreas.push(colider)
  }

  __drawColiders(ctx: CanvasRenderingContext2D) {

    for( let box of this.__coliderAreas ) {
      
        ctx.strokeStyle = "#f00"
        ctx.strokeRect(
          this.attr.x + box.x,
          this.attr.y + box.y,
          box.width,
          box.height
        )
    }
  }

  activeDebugMode() {

    this.__debugMode = true
  }
  
  /**
   * Receives a method to be performed before each frame
   */
  onUpdate(callback: Function) {
    
    this.__onUpdateActions.push(callback)
  }
  
  /**
   * Receives a method that draws an object each frame
   */
  onDraw(callback: Function) {
    
    this.__onDrawActions.push(callback)
  }
  
  /**
   * Calls each update methods apply this object as context
   */
  update() {
    
    for( let action of this.__onUpdateActions ) {
      
      if( action.call && action.apply ) {
        
        action.call(this)
      }
    }
  }
  
  /**
   * Calls each update methods apply this object as context
   */
  draw(ctx: CanvasRenderingContext2D) {
    
    
    for( let action of this.__onDrawActions ) {
      
      if( action.call && action.apply ) {
        
        action.call(this, ctx)
      }
    }

    if( this.__debugMode ) {

      this.__drawColiders(ctx)
    }
  }
}