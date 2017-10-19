import {
    Canvas,
    $CanvasConfiguration,

    GameObject,
    $Rect,
    $Arc
} from "./features/_exports";

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

    createGameObject(type: string, params: Object) {

      switch( type ) {

        case 'rect':
          this.gameObject.createRect(this.ctx, params as $Rect );
        break;

        case 'arc':
          let arcSettings = params as $Arc;

          if( !arcSettings.startAngle ) arcSettings.startAngle = 0;
          if( !arcSettings.endAngle ) arcSettings.endAngle = Math.PI * 2;
          if( !arcSettings.anticlockwise ) arcSettings.anticlockwise = false;

          console.log(arcSettings);
          this.gameObject.createArc(this.ctx, arcSettings);
        break;
      }
    }
}

export const Play2D = new API;
