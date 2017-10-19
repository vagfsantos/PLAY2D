import { Scene, GameLoop } from "../_exports";

export class World {
  private scenes: Scene[] = [];

  constructor(private id: string) {

  }

  add(scene: Scene): World {

    this.scenes.push(scene);
    return this;
  }

  render() {

    for( let scene of this.scenes ) {
      scene.render();
    }
    this.initLoop();
  }

  private initLoop() {

    GameLoop.start(this)
  }
}
