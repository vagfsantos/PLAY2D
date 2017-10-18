import {
    $Rect
} from './GameObject.interfaces';

export class GameObject {

    createRect(canvas: CanvasRenderingContext2D, rect: $Rect) {
      canvas.fillStyle = rect.background;
      canvas.fillRect(
        rect.x,
        rect.y,
        rect.width,
        rect.height
      )
    }

    createCircle() {

    }

    createSprite() {

    }
}
