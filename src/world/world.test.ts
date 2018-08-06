import World from './world';
import worldHelper from './world.helper';

worldHelper.renderSceneInGameLoop = (scene: any) => {
  scene.render();
}

test('can add scenes into a world', () => {
  const world = new World();
  const scene = {};

  world.addScene(scene);
  const scenesAdded = world._scenes;

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
