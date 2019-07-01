import { move } from ".";
import { at } from "../at";
import { by } from "../by";
import { gameObject } from "../gameObject";
import { size } from "../size";

describe("move(go: GameObjectFunction, increment: Vector2d)", () => {
  it("returns an IncrementalFunction", () => {
    const character = gameObject(new Image(), at(2, 2), size(20, 20));

    expect(move(character, by(1, 0))).toBeInstanceOf(Function);
  });

  describe("when calling the IncrementalFunction", () => {
    it("returns a game object with position updated", () => {
      const character = gameObject(new Image(), at(2, 2), size(20, 20));
      const incrementPosition = move(character, by(2, 2));

      expect(incrementPosition()).toMatchObject({ ...character, x: 4, y: 4 });
    });
  });
});
