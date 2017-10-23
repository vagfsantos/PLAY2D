import { World } from "../_exports";

/*
* GameLoop
* The controller of the game timing, framerate and configurations
*/
export class GameLoop {

  /*
  * It starts looping the game
  */
  static start(world: World) {

    window.requestAnimationFrame( world.render.bind(world) );
  }

  static pause() {

  }
}
