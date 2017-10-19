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

const   _defaultCanvasWidth = 500,
        _defaultCanvasHeight = 500;

class API {

    private _canvas = new Canvas();
    private _ctx: CanvasRenderingContext2D;
    private _gameObject = new GameObject();
    private _drawUtil = DrawUtil;

    constructor() {

      this._ctx = this._canvas.getCtx();
    }

    init(configuration: $CanvasConfiguration): API {

        this._canvas.createCanvas(configuration)
        return this;
    }

    createDraw(type: string, params: Object): GameObject {

      switch( type ) {
        case 'rect':
          return this._drawUtil.rect(this._ctx, params as $Rect );

        case 'arc':
          let arcSettings = params as $Arc;
          if( !arcSettings.startAngle ) arcSettings.startAngle = 0;
          if( !arcSettings.endAngle ) arcSettings.endAngle = Math.PI * 2;
          if( !arcSettings.anticlockwise ) arcSettings.anticlockwise = false;
          return this._drawUtil.arc(this._ctx, arcSettings);
      }
    }

    createWorld(id: string): World {
      return new World( id, this._canvas );
    }

    createScene(): Scene {
      return new Scene;
    }
}

export const Play2D = new API;
