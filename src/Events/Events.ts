const DEFAULT_KEYS: any = {

  'UP_ARROW': 38,
  'DOWN_ARROW': 40,
  'LEFT_ARROW': 37,
  'RIGHT_ARROW': 39,

  'SPACE': 32,
  'LEFT_CTRL': 37,
  'LEFT_SHIFT': 36,
  'ENTER': 13,

  'W': 87,
  'A': 65,
  'S': 83,
  'D': 68
}


let Events = {
  
  __keyStatus: {} as any,
  
  
  keyIsPressed(code: number | string) {

    if( typeof code === 'number' ) {
      
      return this.__keyStatus[code] || false
    } else {

      return this.__keyStatus[ DEFAULT_KEYS[code] ] || false
    }

  },

  __handleKeyBoard() {
    
    window.addEventListener('keydown', (e)=>{
      
      e.preventDefault()
      let code = e.keyCode
      
      this.__keyStatus[code] = true
    }, false)
    

    window.addEventListener('keyup', (e)=>{
      
      e.preventDefault()
      let code = e.keyCode
      
      this.__keyStatus[code] = false
    }, false)
  },

  
  __init() {
    
    this.__handleKeyBoard()
  }
}

Events.__init()

export { Events }