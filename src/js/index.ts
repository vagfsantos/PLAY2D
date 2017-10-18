import "babel-polyfill";
import { Play2D } from "./main/api.module.ts";

declare var window: any;
window.Play2D = Play2D;



Play2D.init({
  width: 500,
  height: 300
})

Play2D.createGameObject('rect', {
  x: 50,
  y: 20,
  width: 100,
  height: 100,
  background: '#000'
})

Play2D.createGameObject('arc', {
  x: 50,
  y: 200,
  radius: 50,
  startAngle: 0,
  endAngle: Math.PI * 2,
  anticlockwise: true,
  background: '#000'
})
