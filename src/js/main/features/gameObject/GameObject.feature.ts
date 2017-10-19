export class GameObject {
  private init: Function;
  private update: Function;
  private render: Function;

  setInit(init: Function): void {

    this.init = init.bind(this);
  }

  setUpdate(update: Function): void {

    this.update = update.bind(this);
  }
}
