import "babel-polyfill";
import { Play2D } from "./engine/Core.ts";

declare var window: any;
window.Play2D = Play2D;


Play2D.init({
    width: 900,
    height: 500
})