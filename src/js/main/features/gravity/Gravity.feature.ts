export class Gravity {

  private _acceleration = 0.10;

  getAcceleration(): number {

    return this._acceleration;
  }

  fall(): Function {
    let acceleration = this._acceleration;
    return function() {
      this.y += (acceleration);
      acceleration *= 2;
    }
  }
}
