import { Gravity } from "../_exports";

export class GameObject {
  public init: Function;
  public update: Function;
  public render: Function;
  private config: Object;
  private beforeUpdateActions: Function[] = [];

  setConfig(config) {
    this.config = config;
  }

  setInit(init: Function): void {

    this.init = init.bind(this.config);
    this.render = init.bind(this.config);
  }

  private setPreUpdate(preUpdate: Function) {
    this.beforeUpdateActions.push(preUpdate);
  }

  onUpdate(update: Function): void {

    this.update = update.bind(this.config);
  }

  applyPhysics() {
    let gravity = new Gravity();
    this.setPreUpdate( gravity.fall().bind(this.config) )
  }

  preUpdate() {
    for( let actions of this.beforeUpdateActions ) {
      actions();
    }
  }
}
