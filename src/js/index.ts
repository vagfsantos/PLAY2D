import "babel-polyfill";
import { Play2D } from "./main/api.module.ts";

declare var window: any;
window.Play2D = Play2D;