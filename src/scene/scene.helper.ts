import { Scene } from './scene.interface';
import { ERRORS } from './scene.errors';
import { STATE as CANVAS_STATE } from '../canvas/canvas.state';

const { DOM } = CANVAS_STATE;

const sceneHelper = {
  updateSceneElements(map: any, camera: any, gameObjects: any[]) {
    if (!map || !camera) {
      throw new Error(ERRORS.SCENE_CANNOT_BE_RENDERED);
    }

    map.update();
    camera.update();
    gameObjects.forEach((gameObject: any) => gameObject.update());
  },

  drawSceneElements(map: any, camera: any, gameObjects: any[]) {
    if (!map) {
      throw new Error(ERRORS.SCENE_CANNOT_BE_RENDERED);
    }

    map.draw(DOM.CANVAS);
    camera.draw(DOM.CANVAS);
    gameObjects.forEach((gameObject: any) => gameObject.draw(DOM.CANVAS));
  },
};

export default sceneHelper;
