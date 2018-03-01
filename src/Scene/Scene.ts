import { GameObject } from "../GameObject/GameObject";
import { GameInterface } from "../Game/Game.interfaces";

/**
 * Scene
 * A placeholder for saving gameObjects
 * Renders and update gameObjects
 */
export class Scene {

  /**
   * Canvas elment extracted from game
   */
  __canvas: HTMLCanvasElement = {} as HTMLCanvasElement

  /**
   * Game objects that belongs to the scenes
   */
  __gameObjects: GameObject[] = []

  /**
   * Controls if the scene has being rendered
   */
  __isBeingRendered: boolean = false

  /**
   * Requires the game that this scene belongs to
   */
  constructor(game: GameInterface) {

    this.__canvas = game.getCanvas()
  }


  /**
   * Helper for iterating every game object
   */
  __forEachGameObject(callback: Function) {

    for( let gameObj of this.__gameObjects ) {

      if( callback.call && callback.apply ) {
        
        callback( gameObj )
      }
    }
  }

  
  /**
   * Changes the current state of rendering mode of the scene
   */
  setRenderStateTo(value: boolean) {

    this.__isBeingRendered = value
  }

  /**
   * Adds game objects to the scene
   */
  addGameObject(...gameObjs: GameObject[]) {

    for(let gameObject of gameObjs) {

      this.__gameObjects.push(gameObject)
    }
  }

  /**
   * Handles the update for each game object
   */
  handlerUpdate() {

    this.__forEachGameObject((gameObject: GameObject)=>{

      gameObject.update()
    })
  }

  /**
   * Handles the drawing for each game object
   */
  handlerDraw() {

    let canvasContext = this.__canvas.getContext('2d')

    this.__forEachGameObject((gameObject: GameObject)=>{

      gameObject.draw(canvasContext)
    })
  }

  /**
   * Renders the current scene
   */
  render() {
    
    window.requestAnimationFrame(()=>{
      
      if( this.__isBeingRendered ) {
        
        this.handlerUpdate()
        this.handlerDraw()
        this.render()
      }
    })
  }
}