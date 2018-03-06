import { GameObject } from "../GameObject/GameObject";
import { Map } from "../Map/Map";


class Camera extends GameObject {

  __canvas: HTMLCanvasElement = {} as HTMLCanvasElement
  __gameObjectReference: GameObject
  __gameMaps: Map[]
  __viewBox: any = {}
  __mapBox: any = {}

  constructor(
    canvas: HTMLCanvasElement,
    gameMaps: Map[],
    gameObjectReference: GameObject) {
    
    super()
    this.__canvas = canvas
    this.__gameMaps = gameMaps
    this.__gameObjectReference = gameObjectReference

    this.__configView()
  }

  __configView() {

    this.__viewBox = {
      width: this.__canvas.width,
      height: this.__canvas.height
    }

    let width = 0
    let height = 0

    this.__gameMaps.forEach((map, i, array)=>{

      map.getMapData()
        .then((mapData)=>{

          let mapWidth = mapData.width * mapData.tilewidth
          let mapHeight = mapData.height * mapData.tileheight

          if(mapWidth > width) width = mapWidth
          if(mapHeight > height) height = mapHeight

          if(i === array.length - 1) {

            this.__mapBox = {
              width,
              height
            }
            this.__cameraInit()
          }
        })
    })
  }


  __cameraUpdate() {

    let resultTranslateProperties = {
      x: this.attr.translate.x || 0,
      y: this.attr.translate.y || 0
    }
    
    let objectReferenceData = {
      x: this.__gameObjectReference.attr.x || 0,
      y: this.__gameObjectReference.attr.y || 0,
      width: this.__gameObjectReference.attr.width,
      height: this.__gameObjectReference.attr.height
    }

    const ONE_QUARTER_OF_SCREEN_X = (this.attr.width / 4) - (objectReferenceData.width / 2)
    const ONE_QUARTER_OF_SCREEN_Y = (this.attr.height / 4) - (objectReferenceData.height / 2)
    
    const ALLOW_MOVE_CAMERA_X = objectReferenceData.x > ONE_QUARTER_OF_SCREEN_X
    const ALLOW_MOVE_CAMERA_Y = objectReferenceData.y > ONE_QUARTER_OF_SCREEN_Y
    
    if( ALLOW_MOVE_CAMERA_X ) {
      
      const TRANSLATE_NEGATIVE_X_LIMIT = this.__viewBox.width - this.__mapBox.width
      const TRANSLATE_POSITIVE_X_LIMIT = 0

      let translateXResult = ((objectReferenceData.x) - (ONE_QUARTER_OF_SCREEN_X) ) * -1

      const CAN_MOVE_CAMERA_X = (

        translateXResult >= TRANSLATE_NEGATIVE_X_LIMIT && translateXResult <= TRANSLATE_POSITIVE_X_LIMIT
      )

      if( CAN_MOVE_CAMERA_X ) {

        resultTranslateProperties.x = translateXResult
      }
      
    }

    this.attr = {
      translate: resultTranslateProperties
    }

    // let x = this.__gameObjectReference.attr.x * -1
    // let y = this.__gameObjectReference.attr.y * -1

    // if(
    //   Math.abs(x) > (this.__viewBox.width / 2) || 
    //   Math.abs(y) > (this.__viewBox.height / 2) ) {
        
    //   let translateXNegativeLimit = this.__viewBox.width - this.__mapBox.width
    //   let translateXPositiveLimit = 0

    //   let offsetX = (Math.abs(x) + this.__viewBox.width) - this.__mapBox.width

    //   if(
    //     offsetX <= translateXPositiveLimit &&
    //     offsetX >= translateXNegativeLimit) {

    //       this.attr = {
    //         translate: {
    //           x: x
    //         }
    //       }
    //     }
    // }
  }

  __cameraDraw(ctx: CanvasRenderingContext2D) {
      
    ctx.translate(this.attr.translate.x, 0)
  }

  __cameraInit() {

    this.attr = {
      width: this.__canvas.width,
      height: this.__canvas.height,
      translate: {
        x: this.__gameObjectReference.attr.x,
        y: this.__gameObjectReference.attr.y
      }
    }

    console.log(this.attr)

    this.onUpdate(this.__cameraUpdate)
    this.onDraw(this.__cameraDraw)
  }
}

export { Camera }