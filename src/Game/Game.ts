import { CanvasConfiguration } from "./Game.interfaces";

class Game {

  static canvas: HTMLCanvasElement = document.createElement('canvas')
  private configuration: CanvasConfiguration

  constructor(width: number, height:number) {

    this.configuration = {
      width,
      height
    }

    this.setConfiguration(this.configuration)
    this.init()
  }

  init() {
    this.appendCanvasToBody()
  }

  appendCanvasToBody() {

    document.body.appendChild(Game.canvas)
  }

  getCanvas() {

    return Game.canvas
  }

  getConfiguration() {

    return this.configuration
  }

  setConfiguration(newConfiguration: CanvasConfiguration) {

    this.configuration = newConfiguration
    Game.canvas.width = this.configuration.width
    Game.canvas.height = this.configuration.height
  }
}

export { Game }