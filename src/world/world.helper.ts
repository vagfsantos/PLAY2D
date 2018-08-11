import { WorldSceneState } from './world.interface';
import { ERRORS } from './world.errors';

const worldHelper = {
  renderSceneInGameLoop(scene: any) {
    window.requestAnimationFrame(function gameLoop() {
      scene.render();
      gameLoop();
    });
  },

  goToNextScene(sceneState: WorldSceneState) {
    const totalScenes = sceneState.total;
    const currentScene = sceneState.current;
    const hasNextScene = currentScene + 1 < totalScenes;

    if (hasNextScene) {
      sceneState.current += 1;
      return;
    }

    throw new Error(ERRORS.NEXT_SCENE_NOT_FOUND);
  },

  goToPreviousScene(sceneState: WorldSceneState) {
    const currentScene = sceneState.current;
    const hasPreviousScene = currentScene - 1 >= 0;

    if (hasPreviousScene) {
      sceneState.current -= 1;
      return;
    }

    throw new Error(ERRORS.PREVIOUS_SCENE_NOT_FOUND);
  },
};

export default worldHelper;
