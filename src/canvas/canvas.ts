import canvas_utils from './canvas.utils';
import { i_canvas, i_canvas_configuration } from './canvas.interface';

const canvas: i_canvas = {
  create(configuration: i_canvas_configuration): i_canvas {
    canvas_utils.create_canvas_with(configuration);
    return this;
  },

  get_configuration(): i_canvas_configuration {
    return canvas_utils.get_canvas_configuration();
  },
};

export default canvas;
