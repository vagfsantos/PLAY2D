const DEFAULT_CANVAS_CONFIG = {
  name: 'PLAY2D',
  DOMPlaceholder: 'body',
  width: 500,
  height: 400,
};

export const gameUtils = {
  validateArgumentsForCreateGame(createGameArguments) {
    const {name, width, height, DOMPlaceholder} = createGameArguments;

    return {
      name: name || DEFAULT_CANVAS_CONFIG.name,
      DOMPlaceholder: DOMPlaceholder || DEFAULT_CANVAS_CONFIG.DOMPlaceholder,
      width: width || DEFAULT_CANVAS_CONFIG.width,
      height: height || DEFAULT_CANVAS_CONFIG.height,
    };
  },
};
