import worldHelper from './world.helper';
import { World, WorldSceneState } from './world.interface';

class WorldClass implements World {
  private scenes: any[] = [];
  private sceneState: WorldSceneState = {
    current: 0,
    total: 0,
  };

  addScene(scene: any) {
    this.scenes.push(scene);
    this.sceneState.total += 1;
    return this;
  }

  getScenes() {
    return [].concat(this.scenes);
  }

  nextScene() {
    worldHelper.goToNextScene(this.sceneState);
  }

  prevScene() {
    worldHelper.goToPreviousScene(this.sceneState);
  }

  start() {
    const currentScene = this.scenes[this.sceneState.current];
    worldHelper.renderSceneInGameLoop(currentScene);
  }
}

export default WorldClass;
