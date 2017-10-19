import { GameObject } from "../_exports";

export class Scene {
  private gameObjects: GameObject[] = [];

  add(object: GameObject) {
    this.gameObjects.push(object)
  }

  render() {
    for( let object of this.gameObjects ) {
      object.update();
      object.render();
    }
  }
}
