import { $ColisableArea, Canvas, GameObject } from "../_exports";

/*
* RigidBody
* It can turn an object into a rigid body
*/
export class RigidBody {

  /*
  * It holds all colisable areas that can be in an object
  */
  private _colisableAreas: $ColisableArea[][] = [];

  /*
  * It holds the game object it self
  */
  private _gameObjectInfo: GameObject

  /*
  * Require the game object that can become a rigid body
  */
  constructor(gameObject: GameObject ) {
    this._gameObjectInfo = gameObject;
  }

  /*
  * Setter for colider data
  */
  setColisableArea( colisablePros: $ColisableArea[] ) {

    this._colisableAreas.push(colisablePros);
  }

  /*
  * Getter for colider data
  */
  getColisableAreas(): $ColisableArea[][] {

    return [].concat( this._colisableAreas );
  }

  /*
  * It render the colider areas to degub easily
  */
  renderOnMarkee() {

    for( let areasArray of this._colisableAreas ) {
      for( let area of areasArray ) {
        Canvas.ctx.strokeStyle = 'red';
        Canvas.ctx.strokeRect(
          this._gameObjectInfo.getConfig().x + area.x,
          this._gameObjectInfo.getConfig().y + area.y,
          area.width,
          area.height
        )
      }
    }
  }
}
