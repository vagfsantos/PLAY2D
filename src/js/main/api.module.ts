import {
    Canvas,
    $CanvasConfiguration,

    GameObject,
    $Rect
} from "./features/_exports.ts";

const   _defaultCanvasWidth = 500,
        _defaultCanvasHeight = 500;

class API {

    private canvas = new Canvas();
    private ctx: CanvasRenderingContext2D;
    private gameObject = new GameObject();

    constructor() {

      this.ctx = this.canvas.getCtx();
    }

    init(configuration: $CanvasConfiguration): API {

        this.canvas.createCanvas(configuration)
        return this;
    }

    createGameObject(params: $Rect) {
      this.gameObject.createRect(this.ctx, params);
    }
}

export const Play2D = new API;
