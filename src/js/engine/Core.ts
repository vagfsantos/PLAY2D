import * as Setup from "./../setup/_index.ts";

const   _defaultCanvasWidth = 500,
        _defaultCanvasHeight = 500;

class Core {
    canvas = new Setup.Canvas();

    init(configuration: CreateCanvasInterface) {
        this.canvas.createCanvas(configuration)
    }

    setup() {

    }
}

export const Play2D = new Core;