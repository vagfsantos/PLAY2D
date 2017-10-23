import { Gravity, RigidBody, $ColisableArea } from "../_exports";

/*
* GameObject
* Represents any object that can be displayed on the screen
*/
export class GameObject {

  /*
  * The first render of the game object
  */
  public init: Function;

  /*
  * custom configuration for each object
  */
  private config: any;

  /*
  * Queue of functions to be executed each frame in diferents moments
  */
  private beforeUpdateActions: Function[] = [];
  private updateActions: Function[] = [];
  private renderActions: Function[] = [];

  /*
  * Where can be placed an instance of a RigidBody
  */
  private _rigidBody: RigidBody;

  /*
  * Informs if the object is a colisable one
  */
  private _hasColision: boolean = false;

  /*
  * Inits the RigidBody e set it to this object
  */
  constructor() {

    this._rigidBody = new RigidBody(this);
  }

  /*
  * getter for _config
  */
  getConfig() {
    return this.config;
  }

  /*
  * setter for _config
  */
  setConfig(config) {
    this.config = config;
  }

  /*
  * setter for init
  */
  setInit(action: Function): void {

    this.init = action.bind( this.config );
    this.afterEachFrame( action.bind( this.config ) )
  }

  /*
  * It looping for all the updateActions and calls each one when it is requested
  * Update Actions is function to be ran before render the scene
  */
  update() {
    for(let action of this.updateActions ) {
      if( action.call ) action();
    }
  }

  /*
  * It looping for all the renderActions and calls each one when it is requested
  * Render Actions is usually to display the object
  */
  render() {
    for(let action of this.renderActions ) {
      if( action.call ) action();
    }
  }

  /*
  * setter for beforeUpdateActions, functions is passed as parameters and they are added into the properly queue
  */
  private setPreUpdate(preUpdate: Function) {
    this.beforeUpdateActions.push(preUpdate);
  }

  /*
  * public interface that allows functions be enqueued for performing some action into the object each frame
  */
  eachFrame(update: Function): void {

    this.updateActions.push( update.bind(this.config) );
  }

  /*
  * public interface that allows functions be enqueued for performing some action into the object when all the update methods was called
  */
  afterEachFrame(action: Function) {
    this.renderActions.push( action.bind(this.config) );
  }

  /*
  * It looping for all the beforeUpdateActions and calls each one when it is requested
  * Before Update Actions is usually for Physyscs
  */
  preUpdate() {
    for( let actions of this.beforeUpdateActions ) {
      actions();
    }
  }

  /*
  * It Apllies gravity to the object
  */
  setGravity() {
    let gravity = new Gravity();
    this.setPreUpdate( gravity.fall().bind(this.config) )
  }

  /*
  * It Makes the object a rigid form, with weight, mass and colision
  */
  rigidBody(...colisableProps: $ColisableArea[]) {
    this._hasColision = true;
    this._rigidBody.setColisableArea(colisableProps);

    this.afterEachFrame(() => {
      this._rigidBody.renderOnMarkee();
    })
  }

  testColision() {

  }
}
