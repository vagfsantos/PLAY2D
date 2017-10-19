import "babel-polyfill";
import { Play2D } from "./main/api.module";

declare var window: any;
window.Play2D = Play2D;



Play2D.init({
  width: 500,
  height: 300
})

let rect = Play2D.createDraw('rect', {
  x: 50,
  y: 20,
  width: 100,
  height: 100,
  background: '#000'
});

rect.setUpdate(function(){
  this.x++
});

Play2D.createDraw('arc', {
  x: 50,
  y: 200,
  radius: 50,
  anticlockwise: true,
  background: '#000'
})
