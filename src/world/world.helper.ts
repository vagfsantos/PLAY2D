import { STATE } from './world.state';
import { WorldClass } from './world.interface';

const worldHelper = {
  newSceneAdded() {
    STATE.SCENES.TOTAL++;
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
      STATE.SCENES.CURRENT++;
      return;
    }

    throw new Error('Next scene not avaiable. Make sure to add your scene into the world.');
  }
};

export default worldHelper;
