import {
    Canvas,
    canvasConfiguration
} from "./features/_exports.ts";

const   _defaultCanvasWidth = 500,
        _defaultCanvasHeight = 500;

class API {

    private canvas = new Canvas();

    init(configuration: canvasConfiguration): API {
        
        this.canvas.createCanvas(configuration)
        return this;
    }

    createGameObject(params: Object) {

    }
}

export const Play2D = new API;