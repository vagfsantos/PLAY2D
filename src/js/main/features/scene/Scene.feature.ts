import { GameObject } from "../_exports";

export class Scene {

  private gameObjects: GameObject[] = [];

  add(object: GameObject): Scene {

    this.gameObjects.push(object);
    return this;
  }

  render() {

    for( let object of this.gameObjects ) {
      if( object.preUpdate ) object.preUpdate();
      if( object.update ) object.update();
      if( object.render ) object.render();
    }
  }
}
