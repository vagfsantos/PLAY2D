import { ImageInterface } from './Assets.interfaces'

let Assets = {

  __assetsCount: 0,
  __assetsLoaded: null as any,
  __assetsHasLoaded: false,
  __images: {} as ImageInterface,
  

  __incrementAssetsCount() {
    
    this.__assetsCount++
  },

  __incrementAssetsLoaded() {

    this.__assetsLoaded ? this.__assetsLoaded++ : this.__assetsLoaded = 1
  },

  __addImage(imageData: any) {

    this.__images[imageData.name] = imageData
  },

  __checkAssetsLoading() {

    if( this.__assetsCount === this.__assetsLoaded ) {

      this.__assetsHasLoaded = true
    }
  },

  isAssetsReady() {

    return this.__assetsHasLoaded
  },

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

  getImage(name: string) {
    
    let image = this.__images[name]
    if( image ) return image.image
    else console.error(`Error to retrive the image: "${name}"`)
  }
}

export { Assets }