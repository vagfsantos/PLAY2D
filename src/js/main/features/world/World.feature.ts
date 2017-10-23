import { Scene, GameLoop, Canvas } from "../_exports";

/*
* World
* The placeholder for the game
*/
export class World {

  /*
  * It holds all scenes of the game
  */
  private scenes: Scene[] = [];

  /*
  * It holds the current frame rate
  */
  private _fps = 30;

  /*
  * They hold current and previous time, to render the scenes properly
  */
  private _currentTime: number = 0;
  private _previousTime: number = 0;

  /*
  * Recive the id of the world and the canvas to paint into
  */
  constructor(private _id: string, private _canvas: Canvas) {

  }

  /*
  * It Adds scenes to the world
  */
  add(scene: Scene): World {

    this.scenes.push(scene);
    return this;
  }

  /*
  * It handle the rendering of the world
  */
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

  /*
  * Init the loop game
  */
  private initLoop() {

    GameLoop.start(this);
  }
}
