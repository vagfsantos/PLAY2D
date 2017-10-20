import { $CanvasConfiguration } from './Canvas.interfaces';

export class Canvas {

    private _canvasElement: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    constructor() {

        this._canvasElement = document.createElement('canvas');
        this._ctx = this._canvasElement.getContext('2d')
    }

    getCanvasDimensions(): any {
      return {
        width: this._canvasElement.width,
        height: this._canvasElement.height
      }
    }

    getCtx(): CanvasRenderingContext2D {
      return this._ctx;
    }

    createCanvas(configuration: $CanvasConfiguration): void {

        this._canvasElement.width = configuration.width;
        this._canvasElement.height = configuration.height;

        document.querySelector('body').appendChild(this._canvasElement);
    }

    clean() {
      this._ctx.clearRect(0, 0, this._canvasElement.width, this._canvasElement.height);
    }
}
