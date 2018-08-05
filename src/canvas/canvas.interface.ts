export interface CanvasConfiguration {
  width?: number;
  height?: number;
}

export interface Canvas {
  create(configuration?: CanvasConfiguration): Canvas;
  getConfiguration(): CanvasConfiguration;
  appendTo(DOMQuerySelector: string): void;
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
