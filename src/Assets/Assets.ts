import { ImageInterface } from './Assets.interfaces'

/**
 * Handles all kind of assets in the game
 */
let Assets = {

  /**
   * Current number of assets in the game
   */
  __assetsCount: 0,

  /**
   * Current number of assets already loaded
   */
  __assetsLoaded: null as any,

  /**
   * Status of all assets has been loaded
   */
  __assetsHasLoaded: false,

  /**
   * Image assets objects stored in the application
   */
  __images: {} as ImageInterface,
  

  /**
   * Increment total number assets
   */
  __incrementAssetsCount() {
    
    this.__assetsCount++
  },

  /**
   * Increment total number assets loaded
   */
  __incrementAssetsLoaded() {

    this.__assetsLoaded ? this.__assetsLoaded++ : this.__assetsLoaded = 1
  },

  /**
   * Stores a new custom image object
   */
  __addImage(imageData: any) {

    this.__images[imageData.name] = imageData
  },

  /**
   * Checks if the all assets has been loaded 
   */
  __checkAssetsLoading() {

    if( this.__assetsCount === this.__assetsLoaded ) {

      this.__assetsHasLoaded = true
    }
  },

  /**
   * Returns the status of assets loading
   */
  isAssetsReady() {

    return this.__assetsHasLoaded
  },

  /**
   * Loads an image
   * Increments the assets count
   * Handles the image name and path
   * Get the image on server
   * Handles Success and Error of loading an image
   * Stores a custom object of the image
   */
  loadImage(...paths: string[]) {

    this.__incrementAssetsCount()
    for( let path of paths ) {
      
      let splitedString = path.split(/\:/)

      if( splitedString.length === 2 ) {
        let name = splitedString[0]
        let path = splitedString[1]

        let image = new Image
        image.src = path

        this.__addImage({
          name,
          path,
          image
        })

        image.addEventListener('load', () => {

          this.__incrementAssetsLoaded()
          this.__checkAssetsLoading()
        })

        image.addEventListener('error', ()=>{
          
          this.__incrementAssetsLoaded()
          this.__checkAssetsLoading()
          console.error(`Error to load the image: "${name}" in path: "${path}". Make Sure to use the right pattern "imageName:image/path.ext"`)
        })
      }
    }
  },

  /**
   * Returns a custom image object based on the name of the asset
   */
  getImage(name: string) {
    
    let image = this.__images[name]
    if( image ) return image.image
    else console.error(`Error to retrive the image: "${name}"`)
  }
}

export { Assets }