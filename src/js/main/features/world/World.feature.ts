import { Scene, GameLoop, Canvas } from "../_exports";

export class World {
  private scenes: Scene[] = [];

  constructor(private _id: string, private _canvas: Canvas) {

  }

  add(scene: Scene): World {

    this.scenes.push(scene);
    return this;
  }

  render() {

    for( let scene of this.scenes ) {
      this._canvas.clean();
      scene.render();
    }
    this.initLoop();
  }

  private initLoop() {

    GameLoop.start(this)
  }
}
