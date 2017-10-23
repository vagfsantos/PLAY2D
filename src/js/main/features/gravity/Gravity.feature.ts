/*
* Gravity
* It handles gravity rules for objects
*/
export class Gravity {
  /*
  * It holds the acceleration default for the instance
  */
  private _acceleration = 0.10;

  /*
  * Return the acceleration for the current instance
  */
  getAcceleration(): number {

    return this._acceleration;
  }

  /*
  * return the method rule to apply the fall gravity to any object
  */
  fall(): Function {
    let acceleration = this._acceleration;
    return function() {
      this.y += (acceleration);
      acceleration *= 2;
    }
  }
}
