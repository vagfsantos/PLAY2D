import { $CanvasConfiguration, $CanvasDimensions } from './Canvas.interfaces';

/*
* Canvas
* It Handles and serve all content related to canvas html element
*/
export class Canvas {

  /*
  * privates
  * _canvasElement: It Holds the html reference for canvas
  * _ctx: It Holds rendering context 2D related to the canvas
  */
  private _canvasElement: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;

  /*
  * statics
  * tag: It Serves the Singleton instance of the canvas html element
  * ctx: It Serves the Singleton instance of the rendering context 2D
  */
  static tagHTML: HTMLCanvasElement;
  static ctx: CanvasRenderingContext2D;

  /*
  * constructor
  * create the canvas element and saves the rendering context
  */
  constructor() {

    this._canvasElement = Canvas.tagHTML = document.createElement('canvas');
    this._ctx = Canvas.ctx = this._canvasElement.getContext('2d')
  }

  /*
  * It returns the canvas dimensions
  */
  getCanvasDimensions(): $CanvasDimensions {

    return {
      width: this._canvasElement.width,
      height: this._canvasElement.height
    }
  }

  /*
  * It returns the canvas html tag
  */
  getTagHTML(): HTMLCanvasElement {

    return this._canvasElement;
  }

  /*
  * It returns the canvas rendering context 2D
  */
  getCtx(): CanvasRenderingContext2D {

    return this._ctx;
  }

  /*
  * It sets the width and height of the canvas, then it appends it to body
  */
  createCanvas(configuration: $CanvasConfiguration): void {

    this._canvasElement.width = configuration.width;
    this._canvasElement.height = configuration.height;
    document.querySelector('body').appendChild(this._canvasElement);
  }

  /*
  * It removes all previous drawings into the canvas
  */
  clean(): void {

    this._ctx.clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);
  }
}
