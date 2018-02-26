class Game
{
  canvas: HTMLCanvasElement;

  constructor() {

    this.canvas = document.createElement('canvas')
  }

  getCanvas() {

    return this.canvas
  }

  init() {
    
    console.log('okss')
  }
}

export { Game }