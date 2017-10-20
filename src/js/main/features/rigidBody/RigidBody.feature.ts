import { $ColisableArea, Canvas, GameObject } from "../_exports";

export class RigidBody {

  private _colisableAreas: $ColisableArea[][] = [];
  private _gameObjectInfo: GameObject

  constructor(gameObject: GameObject ) {
    this._gameObjectInfo = gameObject;
  }

  setColisableArea( colisablePros: $ColisableArea[] ) {

    this._colisableAreas.push(colisablePros);
  }

  getColisableAreas(): $ColisableArea[][] {

    return [].concat( this._colisableAreas );
  }

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
