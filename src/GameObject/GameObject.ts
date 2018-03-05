import { GameObjectInterface, GameObjectAttrInterface } from "./GameObject.interfaces";

export class GameObject {
  
  /**
   * Custom atrributes of an game object
   */
  __attr: any = {}

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
  }
}