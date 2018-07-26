import canvas from './canvas';
import canvasHelper from './canvas.helper';
import { STATE } from './canvas.state';

canvasHelper.createCanvasElement = () => <HTMLCanvasElement>{};

test('creates a canvas with default params', () => {
  const canvasObject = canvas.create();

  const canvasConfiguration = canvasObject.getConfiguration();

  expect(canvasConfiguration).toMatchObject({
    width: STATE.CONFIGURATION.DEFAULT.WIDTH,
    height: STATE.CONFIGURATION.DEFAULT.HEIGHT,
  });
});

test('creates a canvas with custom params', () => {
  const configuration = { width: 300, height: 300 };
  const canvasObject = canvas.create(configuration);

  const canvasConfiguration = canvasObject.getConfiguration();

  expect(canvasConfiguration).toMatchObject(configuration);
});
