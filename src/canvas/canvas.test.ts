import canvas from './canvas';
import CANVAS_STATE from './canvas.state';

test('creates a canvas with default params', () => {
  const canvasObject = canvas.create();

  const canvas_configuration = canvasObject.get_configuration();

  expect(canvas_configuration).toMatchObject({
    width: CANVAS_STATE.CONFIGURATION.DEFAULT.WIDTH,
    height: CANVAS_STATE.CONFIGURATION.DEFAULT.HEIGHT,
  });
});
