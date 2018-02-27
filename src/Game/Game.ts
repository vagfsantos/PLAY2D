import { GameInterface, CanvasConfigurationInterface } from "./Game.interfaces";

/**
 * Main Game object, used to contruct new game scopes
 */
let Game: GameInterface = {

  /**
   * Holds the canvas singleton instance of the DOM
   */
  __canvas: {} as HTMLCanvasElement,

  /**
   * Holds all configuration that should be set up into canvas element
   */
  __configuration: {} as CanvasConfigurationInterface,
  
  /**
   * Init all methods needed to construct a Game object properly
   */
  __init(): void {

    this.__setUp()
    this.__appendCanvasToBody()
  },

  /**
   * Generate the canvas instance and set a default configuration
   */
  __setUp(): void {

    this.__canvas = document.createElement('canvas')
    this.__configuration = {
      width: 500,
      height: 500
    }
  },

  /**
   * Append the canvas element to body
   */
  __appendCanvasToBody(): void {
    
    document.body.appendChild( this.getCanvas() )
  },
  


  /**
   * Create a proper game scope
   * @return {GameInterface} A game scope
   */
  create(): GameInterface {

    let game = Object.create(this)
    game.__init()
    return game
  },

  /**
   * return canvas element
   */
  getCanvas(): HTMLCanvasElement {
    
    return this.__canvas
  },

  /**
   * return a copy of configuration object
   */
  getConfiguration(): CanvasConfigurationInterface {
    
    return Object.create(this.__configuration)
  },
  
  /**
   * Change any configuration
   * @param newConfiguration A new configuration object
   */
  setConfiguration(newConfiguration: CanvasConfigurationInterface): void {
    
    this.__configuration = newConfiguration
    this.__canvas.width = this.__configuration.width
    this.__canvas.height = this.__configuration.height
  }
}

export { Game }