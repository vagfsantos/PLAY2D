import {
  Canvas,
  $CanvasConfiguration,

  GameObject,

  DrawUtil,
  $Rect,
  $Arc,

  World,
  Scene
} from "./features/_exports";

/*
* Default canvas dimensions
*/
const _defaultCanvasWidth = 500;
const _defaultCanvasHeight = 500;

/*
* API
* The interface for final users
*/
class API {

  /*
  * Canvas Singleton instance
  */
  private _canvas = new Canvas();

  /*
  * Canvas Singleton Context 2D
  */
  private _ctx: CanvasRenderingContext2D;

  /*
  * GameObject Factory instance
  */
  private _gameObject = new GameObject();

  /*
  * DrawUtil reference
  */
  private _drawUtil = DrawUtil;

  /*
  * It holds the ctx into a shortcut property
  */
  constructor() {

    this._ctx = this._canvas.getCtx();
  }

  /*
  * It inits the canvas creation
  */
  init(configuration: $CanvasConfiguration): API {

    this._canvas.createCanvas(configuration)
    return this;
  }

  /*
  * Create a game object base on configuration passed as arguments
  */
  createDraw(type: string, params: any): GameObject {

    let canvasDimensions = this._canvas.getCanvasDimensions();

    /*
    * Switch the game object to be included by it type
    */
    switch( type ) {
      /*
      * Create a rect
      */
      case 'rect':
        if( params.y === 'top' ) {
          params.y = 0;
        }
        if( params.y === 'bottom' ) {
          params.y = canvasDimensions.height - params.height;
        }
        if( params.x === 'left' ) {
          params.x = 0;
        }
        if( params.x === 'right' ) {
          params.x = canvasDimensions.width - params.width;
        }
        return this._drawUtil.rect(params as $Rect );

      /*
      * Create a rect
      */
      case 'arc':
        let arcSettings = params as $Arc;
        if( !arcSettings.startAngle ) arcSettings.startAngle = 0;
        if( !arcSettings.endAngle ) arcSettings.endAngle = Math.PI * 2;
        if( !arcSettings.anticlockwise ) arcSettings.anticlockwise = false;
        return this._drawUtil.arc(arcSettings);
    }
  }

  /*
  * Create a new world
  */
  createWorld(id: string): World {
    return new World( id, this._canvas );
  }

  /*
  * Create a new scene
  */
  createScene(): Scene {
    return new Scene;
  }
}

/*
* Export Play2D to global scope
*/
export const Play2D = new API;
