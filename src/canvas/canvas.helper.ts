import { STATE } from './canvas.state';
import { CanvasConfiguration } from './canvas.interface';

const { CONFIGURATION } = STATE;

const canvasHelper = {
  createCanvasElement(): HTMLCanvasElement {
    return document.createElement('canvas');
  },

  createCanvasWith(configuration: CanvasConfiguration = {}) {
    const canvas = this.createCanvasElement();

    CONFIGURATION.CURRENT.WIDTH = configuration.width || CONFIGURATION.DEFAULT.WIDTH;
    CONFIGURATION.CURRENT.HEIGHT = configuration.height || CONFIGURATION.DEFAULT.HEIGHT;

    canvas.width = CONFIGURATION.CURRENT.WIDTH;
    canvas.height = CONFIGURATION.CURRENT.HEIGHT;

    this.saveCanvasAtState(canvas);
  },

  saveCanvasAtState(canvas: HTMLCanvasElement) {
    STATE.DOM.CANVAS = canvas;
  },

  getCanvasConfiguration(): CanvasConfiguration {
    return {
      width: CONFIGURATION.CURRENT.WIDTH,
      height: CONFIGURATION.CURRENT.HEIGHT,
    };
  },

  appendCanvasTo(DOMQuerySelector: string) {
    try {
      const element = document.querySelector(DOMQuerySelector);
      element.appendChild(STATE.DOM.CANVAS);
    } catch (e) {
      console.error(e);
      throw new Error('Fail to append canvas into the document. Verify que documentation for appendTo method.');
    }
  }
};

export default canvasHelper;
