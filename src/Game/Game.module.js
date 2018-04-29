import {gameUtils} from './Game.utils';

const Game = {
  _canvas: document.createElement('canvas'),

  create(gameConfiguration = {}) {
    const options = gameUtils.validateArgumentsForCreateGame(gameConfiguration);
    this._canvas.setAttribute('width', options.width);
    this._canvas.setAttribute('height', options.height);
    document
      .querySelector(options.DOMPlaceholder)
      .append(this._canvas);
  },
};

export {Game};
