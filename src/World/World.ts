import { Scene } from "../Scene/Scene";

/**
 * World
 * A placeholder for saving scenes and organize the user ideias of the game
 */
export class World {

  /**
   * The name of the world
   */
  __name: string

  /**
   * Current Scene being rendered, used as index of an array
   */
  __currentScene = 0

  /**
   * Array of Scenes objects that belogns to this world
   */
  __scenes: Scene[] = []

  constructor(name: string) {

    this.__name = name
  }

  /**
   * Returns the current name of the world
   */
  getName() {

    return this.__name
  }


  /**
   * Adds new Scenes to the world
   */
  addScene(scene: Scene) {

    this.__scenes.push(scene)
  }

  /**
   * Goes to a especfic Scene number if exists
   */
  goToScene(sceneNumber: number) {

    if( this.__scenes[sceneNumber] ) {

      this.__currentScene = sceneNumber
    } else {

      throw new Error(`Scene number ${sceneNumber} do not exist in this World: ${this.getName()}`)
    }
  }


  /**
   * Handler the rendering calls of the scenes
   */
  init() {

    let currentScene = this.__scenes[this.__currentScene]
    if( currentScene ) {

      currentScene.setRenderStateTo(true)
      currentScene.render()
    } else {

      throw new Error(`Make sure to add a new Scene to your world before initialize it.`)
    }
  }
}