import { CanvasState } from './canvas.interface';

export const STATE: CanvasState = {
  DOM: {
    CANVAS: null,
  },

  CONFIGURATION: {
    DEFAULT: {
      WIDTH: 600,
      HEIGHT: 400,
    },

    CURRENT: {
      WIDTH: 0,
      HEIGHT: 0,
    },
  },
};
