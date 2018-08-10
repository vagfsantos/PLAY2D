import worldHelper from './world.helper';
import { World } from './world.interface';
import { STATE } from './world.state';

class WorldClass implements World {
  private scenes: any[] = [];

  constructor() {
    STATE.SCENES.CURRENT = 0;
    STATE.SCENES.TOTAL = 0;
  }

  addScene(scene: any) {
    this.scenes.push(scene);
    worldHelper.newSceneAdded();
    return this;
  }

  getScenes() {
    return [].concat(this.scenes);
  }

  nextScene() {
    worldHelper.goToNextScene();
  }

  start() {
    const currentScene = this.scenes[STATE.SCENES.CURRENT];
    worldHelper.renderSceneInGameLoop(currentScene);
  }
}

export default WorldClass;
