import "babel-polyfill";
import { Play2D } from "./main/api.module.ts";

declare var window: any;
window.Play2D = Play2D;


Play2D.init({
    width: 900,
    height: 500
})

Play2D.createGameObject({
    type: 'rect',
    x: 50,
    y: 20,
    width: 100,
    height: 100,
    background: '#000'
})