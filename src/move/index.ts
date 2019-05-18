import { at } from "../at";
import { add } from "../add";

export function move(
  gameObjectFn: GameObjectFunction,
  incrementalPosition: Vector2d
): IncrementalMoveFunction {
  const { x, y } = gameObjectFn();
  let currentPosition = at(x, y);

  return (): GameObject => {
    currentPosition = add(currentPosition, incrementalPosition);
    return gameObjectFn(currentPosition);
  };
}
