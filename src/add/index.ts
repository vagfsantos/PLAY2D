import { at } from "../at";

export function add(v1: Vector2d, v2: Vector2d): Vector2d {
  const { x: v1x, y: v1y } = v1;
  const { x: v2x, y: v2y } = v2;

  return at(v1x + v2x, v1y + v2y);
}
