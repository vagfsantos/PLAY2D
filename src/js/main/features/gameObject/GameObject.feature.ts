import { Gravity, RigidBody, $ColisableArea } from "../_exports";

export class GameObject {

  public init: Function;

  private config: any;

  private beforeUpdateActions: Function[] = [];
  private updateActions: Function[] = [];
  private renderActions: Function[] = [];

  private _rigidBody: RigidBody;

  constructor() {

    this._rigidBody = new RigidBody(this);
  }

  setConfig(config) {
    this.config = config;
  }

  getConfig() {
    return this.config;
  }

  setInit(action: Function): void {

    this.init = action.bind( this.config );
    this.afterEachFrame( action.bind( this.config ) )
  }

  update() {
    for(let action of this.updateActions ) {
      if( action.call ) action();
    }
  }

  render() {
    for(let action of this.renderActions ) {
      if( action.call ) action();
    }
  }

  private setPreUpdate(preUpdate: Function) {
    this.beforeUpdateActions.push(preUpdate);
  }

  eachFrame(update: Function): void {

    this.updateActions.push( update.bind(this.config) );
  }

  afterEachFrame(action: Function) {
    this.renderActions.push( action.bind(this.config) );
  }

  preUpdate() {
    for( let actions of this.beforeUpdateActions ) {
      actions();
    }
  }

  setGravity() {
    let gravity = new Gravity();
    this.setPreUpdate( gravity.fall().bind(this.config) )
  }

  rigidBody(...colisableProps: $ColisableArea[]) {
    this._rigidBody.setColisableArea(colisableProps);

    this.afterEachFrame(() => {
      this._rigidBody.renderOnMarkee();
    })
  }
}
