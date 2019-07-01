import { gameObject } from ".";
import { size } from "../size";
import { at } from "./../at";

describe("gameObject(image, position, size)", () => {
  it("returns a gameObject function", () =>
    expect(
      gameObject(new Image(), { x: 1, y: 2 }, { width: 1, height: 2 })
    ).toBeInstanceOf(Function));

  describe("when calling a gameObject function", () => {
    it("returns a gameObject with image, position and size", () => {
      const character = gameObject(
        new Image(),
        { x: 1, y: 2 },
        { width: 1, height: 2 }
      );

      expect(character()).toMatchObject({
        height: 2,
        image: new Image(),
        width: 1,
        x: 1,
        y: 2
      });
    });

    it("returns a gameObject with position and size updated", () => {
      const character = gameObject(
        new Image(),
        { x: 1, y: 2 },
        { width: 1, height: 2 }
      );

      expect(character(at(22, 22), size(11, 11))).toMatchObject({
        height: 11,
        image: new Image(),
        width: 11,
        x: 22,
        y: 22
      });
    });
  });
});
