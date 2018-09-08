import Scene from './Scene';
import { ERRORS } from './scene.errors';
import { STATE as CANVAS_STATE } from './../canvas/canvas.state';

const { DOM } = CANVAS_STATE;

let scene: Scene = null;
let map: any = null;
let camera: any = null;
let gameObject: any = null;

beforeEach(() => {
  scene = new Scene();
  map = {
    update: jest.fn(),
    draw: jest.fn(),
  };
  camera = {
    update: jest.fn(),
    draw: jest.fn(),
  };
  gameObject = {
    update: jest.fn(),
    draw: jest.fn(),
  };
});

describe('a scene can...', () => {
  test('adds a map', () => {
    scene.setMapTo(map);
    expect(scene.getMap()).toMatchObject(map);
  });

  test('adds a camera', () => {
    scene.setCameraTo(camera);
    expect(scene.getCamera()).toMatchObject(camera);
  });

  test('adds several game objects', () => {
    scene.addGameObject(gameObject, gameObject, gameObject);
    expect(scene.getGameObjects()).toHaveLength(3);
  });
});

describe('when a scenes have redered...', () => {
  test('throws an error if there is no map set', () => {
    scene.setMapTo(map);

    expect(() => {
      scene.render();
    })
    .toThrowError(ERRORS.SCENE_CANNOT_BE_RENDERED);
  });

  test('throws an error if there is no camera set', () => {
    scene.setCameraTo(camera);

    expect(() => {
      scene.render();
    })
    .toThrowError(ERRORS.SCENE_CANNOT_BE_RENDERED);
  });

  test('updates and draws a map using canvas', () => {
    scene.setMapTo(map);
    scene.setCameraTo(camera);

    scene.render();

    expect(map.update).toHaveBeenCalled();
    expect(map.draw).toHaveBeenCalled();
    expect(map.draw).toHaveBeenCalledWith(DOM.CANVAS);
  });

  test('updates and draws a camera using canvas', () => {
    scene.setMapTo(map);
    scene.setCameraTo(camera);

    scene.render();

    expect(camera.update).toHaveBeenCalled();
    expect(camera.draw).toHaveBeenCalled();
    expect(camera.draw).toHaveBeenCalledWith(DOM.CANVAS);
  });

  test('updates and draws all game objects using canvas', () => {
    scene.setMapTo(map);
    scene.setCameraTo(camera);

    scene.addGameObject(gameObject);
    scene.render();

    expect(gameObject.update).toHaveBeenCalled();
    expect(gameObject.draw).toHaveBeenCalled();
    expect(gameObject.draw).toHaveBeenCalledWith(DOM.CANVAS);
  });
});
