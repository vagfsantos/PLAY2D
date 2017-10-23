import { GameObject } from "../_exports";

/*
* Scene
* It creates stages throught the game life time.
* It Holds all game objects for the current scene
* It can update and render all game objects
*/
export class Scene {

  /*
  * It holds all game objects for the scene
  */
  private gameObjects: GameObject[] = [];

  /*
  * It Adds game object to the scene
  */
  add(object: GameObject): Scene {

    this.gameObjects.push(object);
    return this;
  }

  /*
  * It updates and renders all objects in the scene
  */
  render() {

    for( let object of this.gameObjects ) {
      if( object.preUpdate ) object.preUpdate();
      if( object.update ) object.update();
      if( object.render ) object.render();
    }
  }
}
