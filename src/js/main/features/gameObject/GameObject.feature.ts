export class GameObject {
  public init: Function;
  public update: Function;
  public render: Function;
  private config: Object;

  setConfig(config) {
    this.config = config;
  }

  setInit(init: Function): void {

    this.init = init.bind(this.config);
    this.render = init.bind(this.config);
  }

  onUpdate(update: Function): void {

    this.update = update.bind(this.config);
  }
}
