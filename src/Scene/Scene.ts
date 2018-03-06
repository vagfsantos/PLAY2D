import { GameObject } from "../GameObject/GameObject";
import { GameInterface } from "../Game/Game.interfaces";
import { Map } from "../Map/Map";
import { Assets } from "../Assets/Assets";
import { Camera } from "../Camera/Camera";

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
  __ctx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D

  /**
   * Game objects that belongs to the scenes
   */
  __gameMaps: Map[] = []

  /**
   * Game objects that belongs to the scenes
   */
  __gameObjects: GameObject[] = []

  /**
   * Controls if the scene has being rendered
   */
  __isBeingRendered: boolean = false

  __camera: Camera

  /**
   * Requires the game that this scene belongs to
   */
  constructor(game: GameInterface) {

    this.__canvas = game.getCanvas()
    this.__ctx = this.__canvas.getContext('2d')
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
   * Adds maps objects to the scene
   */
  addMap(JSONMapName: string) {
    
    let map = new Map(JSONMapName)
    this.__gameMaps.push(map)
  }

  /**
   * Calls render actions of all game maps added to this scene
   */
  renderMap() {

    for(let map of this.__gameMaps) {

      map.render(this.__ctx)
    }
  }

  setCamera(gameObj: GameObject) {

    this.__camera = new Camera(this.__canvas, this.__gameMaps, gameObj)
    this.__gameObjects.unshift(this.__camera)
  }

  /**
   * Cleans the canvas
   */
  cleanScene() {

    this.__ctx.clearRect(0,0, this.__canvas.width, this.__canvas.height)
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

    this.__forEachGameObject((gameObject: GameObject)=>{

      gameObject.draw(this.__ctx)
    })
  }

  /**
   * Renders the current scene
   */
  render() {
    let lastTime = 0
    /**
     * Main loop
     */
    window.requestAnimationFrame(()=>{

      /**
       * Checks if the scene can be rendered
       */
      if( this.__isBeingRendered ) {
        
        /**
         * Checks if all assets was loaded
         */
        var currentTime = new Date().getTime()
        let elapsed = Math.abs(lastTime - currentTime)
        
        console.log(elapsed)
        if( Assets.isAssetsReady() && elapsed > 100) {
          
          /**
           * Clean the canvas, then render the maps, then updates all data, finally renders it
           */
          this.cleanScene()
          this.renderMap()
          this.handlerUpdate()
          this.handlerDraw()
          lastTime = currentTime
        }
        
        this.render()
      }
    })
  }
}