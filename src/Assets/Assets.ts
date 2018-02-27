import { ImageInterface } from './Assets.interfaces'

let Assets = {

  __assetsCount: 0,
  __assetsHasLoaded: false,
  __images: [] as ImageInterface[],

  

  __incrementAssetsCount() {
    
    this.__assetsCount++
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

        image.addEventListener('load', () => {
          
          this.__addImage({
            name,
            path,
            image
          })
        })

        image.addEventListener('error', ()=>{

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