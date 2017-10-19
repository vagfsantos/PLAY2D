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

    private canvas = new Canvas();
    private ctx: CanvasRenderingContext2D;
    private gameObject = new GameObject();
    private drawUtil = DrawUtil;

    constructor() {

      this.ctx = this.canvas.getCtx();
    }

    init(configuration: $CanvasConfiguration): API {

        this.canvas.createCanvas(configuration)
        return this;
    }

    createDraw(type: string, params: Object): GameObject {

      switch( type ) {
        case 'rect':
          return this.drawUtil.rect(this.ctx, params as $Rect );

        case 'arc':
          let arcSettings = params as $Arc;
          if( !arcSettings.startAngle ) arcSettings.startAngle = 0;
          if( !arcSettings.endAngle ) arcSettings.endAngle = Math.PI * 2;
          if( !arcSettings.anticlockwise ) arcSettings.anticlockwise = false;
          return this.drawUtil.arc(this.ctx, arcSettings);
      }
    }

    createWorld(id: string): World {
      return new World(id);
    }

    createScene(): Scene {
      return new Scene;
    }
}

export const Play2D = new API;
