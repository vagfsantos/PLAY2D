import sceneHelper from './scene.helper';
import { Scene } from './scene.interface';

class SceneClass implements Scene {
  private map: any;
  private camera: any;
  private gameObjects: any[] = [];

  render(): void {
    const map = this.map;
    const camera = this.camera;
    const gameObjects = this.gameObjects;

    sceneHelper.updateSceneElements(map, camera, gameObjects);
    sceneHelper.drawSceneElements(map, camera, gameObjects);
  }

  setMapTo(map: any): void {
    this.map = map;
  }

  getMap(): void {
    return this.map;
  }

  setCameraTo(camera: any): void {
    this.camera = camera;
  }

  getCamera(): void {
    return this.camera;
  }

  addGameObject(...gameObjects: any[]): void {
    this.gameObjects = this.gameObjects.concat(gameObjects);
  }

  getGameObjects(): any[] {
    return this.gameObjects;
  }
}

export default SceneClass;
