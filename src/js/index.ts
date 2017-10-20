import "babel-polyfill";
import { Play2D } from "./main/api.module";

declare var window: any;
window.Play2D = Play2D;



Play2D.init({
  width: 500,
  height: 400
})

let rect = Play2D.createDraw('rect', {
  x: 50,
  y: 20,
  width: 100,
  height: 100,
  background: '#000'
});

let floor = Play2D.createDraw('rect', {
  x: 0,
  y: 'bottom',
  width: 500,
  height: 20,
  background: '#000'
});

rect.eachFrame(function(){
  this.x++
});

rect.setGravity();

rect.rigidBody({
  x: 5,
  y: 5,
  width: 90,
  height: 90
});

floor.rigidBody({
  x: 10,
  y: 5,
  width: 480,
  height: 10
});


var world = Play2D.createWorld('fase 1');
var scene = Play2D.createScene();
scene
  .add(rect)
  .add(floor)

world.add(scene).render();

Play2D.createDraw('arc', {
  x: 50,
  y: 200,
  radius: 50,
  anticlockwise: true,
  background: '#000'
})
