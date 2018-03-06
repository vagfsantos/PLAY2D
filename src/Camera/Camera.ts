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
            this.__init()
          }
        })
    })
  }

  __init() {

    console.log(this.__mapBox)

    this.attr = {
      width: this.__canvas.width,
      height: this.__canvas.height,
      translate: {
        x: 0,
        y: 0
      }
    }

    this.onUpdate(function(){
      let attr = this.attr
      let x = attr.translate.x
      let y = attr.translate.y

      let translateXNegativeLimit = this.__viewBox.width - this.__mapBox.width
      let translateXPositiveLimit = 0

      let offsetX = (Math.abs(x) + this.__viewBox.width) - this.__mapBox.width

      if(
        offsetX <= translateXPositiveLimit &&
        offsetX >= translateXNegativeLimit) {

          this.attr = {
            translate: {
              x: x - 0.02
            }
          }
        }
    })

    this.onDraw(function(ctx: CanvasRenderingContext2D){
      // //console.log(this.attr)
      // ctx.save()
      // ctx.translate(this.attr.translate.x, 0)
      // ctx.restore()
    })
  }
}

export { Camera }