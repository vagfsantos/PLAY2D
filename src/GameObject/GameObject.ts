import { GameObjectInterface, GameObjectAttrInterface } from "./GameObject.interfaces";

export class GameObject {
  
  __attr: any = {}
  __onUpdateActions: Function[] = []
  __onDrawActions: Function[] = []
  
  set attr(object: any) {
    
    for(let key in object) {
      
      this.__attr[key] = object[key]
    }
  }

  get attr() {

    return this.__attr
  }
  
  onUpdate(callback: Function) {
    
    this.__onUpdateActions.push(callback)
  }
  
  onDraw(callback: Function) {
    
    this.__onDrawActions.push(callback)
  }
  
  update() {
    
    for( let action of this.__onUpdateActions ) {
      
      if( action.call && action.apply ) {
        
        action.call(this)
      }
    }
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    
    for( let action of this.__onDrawActions ) {
      
      if( action.call && action.apply ) {
        
        action.call(this, ctx)
      }
    }
  }
}