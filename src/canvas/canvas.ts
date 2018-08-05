import canvasHelper from './canvas.helper';
import { Canvas, CanvasConfiguration } from './canvas.interface';

const canvas: Canvas = {
  create(configuration: CanvasConfiguration): Canvas {
    canvasHelper.createCanvasWith(configuration);
    return this;
  },

  getConfiguration(): CanvasConfiguration {
    return canvasHelper.getCanvasConfiguration();
  },

  appendTo(DOMQuerySelector: string) {
    canvasHelper.appendCanvasTo(DOMQuerySelector);
  }
};

export default canvas;
