import CANVAS_STATE from './canvas.state';
import { i_canvas_configuration } from './canvas.interface';

const { CONFIGURATION } = CANVAS_STATE;

const canvas_utils = {
  create_canvas_element() {
    return {};
  },

  create_canvas_with(configuration: i_canvas_configuration = {}) {
    const canvas = this.create_canvas_element();
    canvas.width = CONFIGURATION.CURRENT.WIDTH = configuration.width || CONFIGURATION.DEFAULT.WIDTH;
    canvas.height = CONFIGURATION.CURRENT.HEIGHT = configuration.height || CONFIGURATION.DEFAULT.HEIGHT;
  },

  get_canvas_configuration(): i_canvas_configuration {
    return {
      width: CONFIGURATION.CURRENT.WIDTH,
      height: CONFIGURATION.CURRENT.HEIGHT,
    };
  }
};

export default canvas_utils;
