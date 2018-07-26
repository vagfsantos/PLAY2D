export interface CanvasConfiguration {
  width?: number;
  height?: number;
}

export interface Canvas {
  create(configuration?: CanvasConfiguration): Canvas;
  getConfiguration(): CanvasConfiguration;
}

export interface CanvasState {
  DOM: {
    CANVAS: HTMLCanvasElement;
  };

  CONFIGURATION: {
    DEFAULT: {
      WIDTH: number,
      HEIGHT: number,
    },

    CURRENT: {
      WIDTH: number,
      HEIGHT: number,
    },
  };
}
