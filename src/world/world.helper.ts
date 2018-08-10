import { STATE } from './world.state';
import { ERRORS } from './world.errors';

const worldHelper = {
  newSceneAdded() {
    STATE.SCENES.TOTAL += 1;
  },

  renderSceneInGameLoop(scene: any) {
    window.requestAnimationFrame(function gameLoop() {
      scene.render();
      gameLoop();
    });
  },

  goToNextScene() {
    const totalScenes = STATE.SCENES.TOTAL;
    const currentScene = STATE.SCENES.CURRENT;
    const hasNextScene = currentScene <= totalScenes;

    if (hasNextScene) {
      STATE.SCENES.CURRENT += 1;
      return;
    }

    throw new Error(ERRORS.NEXT_SCENE_NOT_FOUND);
  },
};

export default worldHelper;
