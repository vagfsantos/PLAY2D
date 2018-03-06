import { GameObjectInterface, GameObjectAttrInterface } from "../GameObject/GameObject.interfaces";
import { Tile } from "./Tile/Tile";
import { GameObject } from "../GameObject/GameObject";
import { Assets } from "../Assets/Assets";

export class Map {

  /**
   * Map name
   */
  __name: string = ''

  /**
   * Path for map JSON data
   */
  __JSONPath: string = ''

  /**
   * Path for map image
   */
  __image: any = {} as any

  /**
   * Each title of the map
   */
  __tiles: Tile[] = []

  /**
   * Colider areas into the map
   */
  __coliders: GameObject[] = []

  /**
   * Debug mode, shows the titles on screen
   */
  __debugMode: boolean = true
  

  /**
   * Requires a name, the identifier of the JSON map and Image map
   * It requires the JSON, and start all methods needed for initialization
   */
  constructor(JSONMapName: string) {
    
    this.__name = JSONMapName
    this.__JSONPath = `../assets/${JSONMapName}.json`

    Assets.loadImage(`${JSONMapName}:../assets/${JSONMapName}.png`)
    this.__image = Assets.getImage(JSONMapName)
    this.__init()
  }
  
  /**
   * Gets the map on server
   */
  getMapData() {
    
    return fetch(this.__JSONPath).then((data)=>{
      
      return data.json()
    })
  }
  
  /**
   * Inits all basic functionalities after getting the map data
   */
  __init() {
    
    this.getMapData()
    .then((map: any)=>{
      
      this.__createTileGrid(map)
      this.__createColiderMapAreas(map)
    })
  }
  
  /**
   * Creates the tiled grid
   */
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
  
  /**
   * Creates the colider areas of the map
   */
  __createColiderMapAreas(map: any) {
    
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
  
  /**
   * Renders tiles in debug mode
   */
  __renderTiles(ctx: CanvasRenderingContext2D) {
    
    for(let tile of this.__tiles) {
      
      tile.draw(ctx)
    }
  }

  /**
   * Renders the map image
   */
  __renderMap(ctx: CanvasRenderingContext2D) {

    ctx.drawImage(this.__image, 0, 0, this.__image.width, this.__image.height)
  }
  
  /**
   * Calls render methods of tiles and map image
   */
  render(ctx: CanvasRenderingContext2D) {
    
    this.__renderMap(ctx)

    if( this.__debugMode ) {
      
      this.__renderTiles(ctx)
    }
  }
}