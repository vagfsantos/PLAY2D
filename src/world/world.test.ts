import World from './World';
import worldHelper from './world.helper';
import { ERRORS } from './world.errors';

worldHelper.renderSceneInGameLoop = (scene: any) => {
  scene.render();
};

test('can add scenes into a world', () => {
  const world = new World();
  const scene = {};

  world.addScene(scene);
  const scenesAdded = world.getScenes();

  expect(scenesAdded).toHaveLength(1);
});

test('renders the current scene', () => {
  const world = new World();
  const scene = {
    render: jest.fn(),
  };

  world.addScene(scene);
  world.start();

  expect(scene.render).toHaveBeenCalled();
});

describe('when the current scene is changed to the next', () => {
  describe('and next scene is avaiable to be render', () => {
    test('renders next scene', () => {
      const world = new World();
      const scene1 = { render: jest.fn() };
      const scene2 = { render: jest.fn() };

      world.addScene(scene1);
      world.addScene(scene2);

      world.nextScene();
      world.start();

      expect(scene1.render).toHaveBeenCalledTimes(0);
      expect(scene2.render).toHaveBeenCalled();
    });
  });

  describe('and next scene is unavaiable to be render', () => {
    test('throws an error when there is not a next scene to render', () => {
      const world = new World();
      const scene1 = {};

      world.addScene(scene1);

      expect(() => {
        world.nextScene();
      })
      .toThrowError(ERRORS.NEXT_SCENE_NOT_FOUND);
    });
  });
});

describe('when the current scene is changed to the previous', () => {
  describe('and previous scene is avaiable to be render', () => {
    test('renders previous scene', () => {
      const world = new World();
      const scene1 = { render: jest.fn() };
      const scene2 = { render: jest.fn() };

      world.addScene(scene1);
      world.addScene(scene2);

      world.nextScene();
      world.prevScene();
      world.start();

      expect(scene1.render).toHaveBeenCalled();
      expect(scene2.render).toHaveBeenCalledTimes(0);
    });
  });

  describe('and next scene is unavaiable to be render', () => {
    test('throws an error when there is not a previous scene to render', () => {
      const world = new World();
      const scene1 = {};

      world.addScene(scene1);

      expect(() => {
        world.prevScene();
      })
      .toThrowError(ERRORS.PREVIOUS_SCENE_NOT_FOUND);
    });
  });
});
