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

var world = Play2D.createWorld('fase 1');
var scene = Play2D.createScene();
scene.add(rect);

world.add(scene).render();

Play2D.createDraw('arc', {
  x: 50,
  y: 200,
  radius: 50,
  anticlockwise: true,
  background: '#000'
})
