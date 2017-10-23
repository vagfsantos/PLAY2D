import { Gravity, RigidBody, $ColisableArea, $GameObjectConfig } from "../_exports";

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
  private _config: $GameObjectConfig;

  /*
  * Queue of functions to be executed each frame in diferents moments
  */
  private _beforeUpdateActions: Function[] = [];
  private _updateActions: Function[] = [];
  private _renderActions: Function[] = [];

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
  * setter for beforeUpdateActions, functions is passed as parameters and they are added into the properly queue
  */
  private setPreUpdate(preUpdate: Function) {
    this._beforeUpdateActions.push(preUpdate);
  }

  /*
  * public interface that allows functions be enqueued for performing some action into the object each frame
  */
  public eachFrame(update: Function): void {

    this._updateActions.push( update.bind(this._config) );
  }

  /*
  * public interface that allows functions be enqueued for performing some action into the object when all the update methods was called
  */
  public afterEachFrame(action: Function) {
    this._renderActions.push( action.bind(this._config) );
  }

  /*
  * getter for _config
  */
  public getConfig(): $GameObjectConfig {
    return this._config;
  }

  /*
  * setter for _config
  */
  public setConfig(config): void {
    this._config = config;
  }

  /*
  * setter for init
  */
  public setInit(action: Function): void {

    this.init = action.bind( this._config );
    this.afterEachFrame( action.bind( this._config ) )
  }

  /*
  * It looping for all the beforeUpdateActions and calls each one when it is requested
  * Before Update Actions is usually for Physyscs
  */
  public preUpdate() {
    for( let actions of this._beforeUpdateActions ) {
      actions();
    }
  }

  /*
  * It looping for all the updateActions and calls each one when it is requested
  * Update Actions is function to be ran before render the scene
  */
  public update(): void {
    for(let action of this._updateActions ) {
      if( action.call ) action();
    }
  }

  /*
  * It looping for all the renderActions and calls each one when it is requested
  * Render Actions is usually to display the object
  */
  public render(): void {
    for(let action of this._renderActions ) {
      if( action.call ) action();
    }
  }

  /*
  * It Apllies gravity to the object
  */
  public setGravity() {
    let gravity = new Gravity();
    this.setPreUpdate( gravity.fall().bind(this._config) )
  }

  /*
  * It Makes the object a rigid form, with weight, mass and colision
  */
  public rigidBody(...colisableProps: $ColisableArea[]) {
    this._hasColision = true;
    this._rigidBody.setColisableArea(colisableProps);

    this.afterEachFrame(() => {
      this._rigidBody.renderOnMarkee();
    })
  }

  public testColision() {

  }
}
