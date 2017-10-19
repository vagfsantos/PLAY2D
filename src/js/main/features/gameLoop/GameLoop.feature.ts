import { World } from "../_exports";

export class GameLoop {

  static start(world: World) {

    window.requestAnimationFrame(world.render.bind(world));
  }

  static pause() {

  }
}
