import worldHelper from './world.helper';
import { World } from './world.interface';
import { STATE } from './world.state';

class WorldClass implements World {
  _scenes: any[] = [];

  addScene(scene: any) {
    this._scenes.push(scene);
    worldHelper.newSceneAdded();
    return this;
  }

  nextScene() {
    worldHelper.goToNextScene();
  }

  start() {
    const currentScene = this._scenes[STATE.SCENES.CURRENT];
    worldHelper.renderSceneInGameLoop(currentScene);
  }
}

export default WorldClass;
