import { GameObjectInterface, GameObjectAttrInterface } from "../GameObject/GameObject.interfaces";
import { Tile } from "./Tile/Tile";
import { GameObject } from "../GameObject/GameObject";
import { Assets } from "../Assets/Assets";

export class Map {
  __name: string = ''
  __JSONPath: string = ''
  __image: any = {} as any
  __tiles: Tile[] = []
  __coliders: GameObject[] = []
  __debugMode: boolean = true
  
  constructor(JSONMapName: string) {
    
    this.__name = JSONMapName
    this.__JSONPath = `../assets/${JSONMapName}.json`

    Assets.loadImage(`${JSONMapName}:../assets/${JSONMapName}.png`)
    this.__image = Assets.getImage(JSONMapName)
    this.__init()
  }
  
  __getMap() {
    
    return fetch(this.__JSONPath).then((data)=>{
      
      return data.json()
    })
  }
  
  __init() {
    
    this.__getMap()
    .then((map)=>{
      
      this.__createTileGrid(map)
      this.__createSolidTiles(map)
    })
  }
  
  __createTileGrid(map: any) {
    
    let mapWidth = map.tilewidth * map.width
    let mapHeight = map.tileheight * map.height
    
    for( let i = 0; i <= mapWidth; i += map.tilewidth ) {
      
      for( let j = 0; j <= mapHeight; j += map.tileheight ) {
        
        let tileProps = {} as GameObjectAttrInterface
        tileProps.x = i
        tileProps.y = j
        tileProps.width = map.tilewidth
        tileProps.height = map.tileheight
        let tile = new Tile(tileProps)
        this.__tiles.push(tile)
      }
    }
  }
  
  __createSolidTiles(map: any) {
    
    if( map.layers ) {
      
      map.layers.forEach((layer: any) => {
        
        if( layer.objects ) {
          
          layer.objects.forEach((object: any) => {
            
            let coliderObject = new GameObject()
            coliderObject.attr = {
              x: object.x,
              y: object.y,
              width: object.width,
              height: object.height,
              isRigidBody: object.properties.solid || false
            }
            
            this.__coliders.push(coliderObject)
          })
        }
      });
    }
  }
  
  __renderTiles(ctx: CanvasRenderingContext2D) {
    
    for(let tile of this.__tiles) {
      
      tile.draw(ctx)
    }
  }

  __renderMap(ctx: CanvasRenderingContext2D) {
    console.log(this.__image)
    ctx.drawImage(this.__image, 0, 0, this.__image.width, this.__image.height)
  }
  
  render(ctx: CanvasRenderingContext2D) {
    
    this.__renderMap(ctx)

    if( this.__debugMode ) {
      
      this.__renderTiles(ctx)
    }
  }
}