import { Scene, GameLoop, Canvas } from "../_exports";

export class World {
  private scenes: Scene[] = [];
  private _fps = 30;
  private _currentTime: number = 0;
  private _previousTime: number = 0;

  constructor(private _id: string, private _canvas: Canvas) {

  }

  add(scene: Scene): World {

    this.scenes.push(scene);
    return this;
  }

  render(): void {
    this._currentTime = new Date().getTime();
    let elapsed = this._currentTime - this._previousTime;

    if( elapsed > (1000 / 30) ) {

      for( let scene of this.scenes ) {
        this._canvas.clean();
        scene.render();
      }

      this._previousTime = this._currentTime;
    }

    this.initLoop();
  }

  private initLoop() {

    GameLoop.start(this);
  }
}
