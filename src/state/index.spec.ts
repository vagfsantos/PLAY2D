import { state } from ".";
import { at } from "../at";
import { gameObject } from "../gameObject";
import { image } from "../image";
import { size } from "../size";

describe("state | Function", () => {
  describe("when calling without params", () => {
    it("returns same object state", () => {
      const object = gameObject(image("any.jpg"), at(0, 0), size(0, 0));
      const newObj = state(object);

      const result = newObj();

      expect(result).toEqual(object());
    });
  });

  describe("when calling with a function that returns a game object", () => {
    it("returns a new game object state saved", () => {
      const object = gameObject(image("any.jpg"), at(0, 0), size(0, 0));
      const newObj = state(object);
      const changedState = object(at(1, 2));

      const result1 = newObj(() => changedState);
      const result2 = newObj();
      const result3 = newObj();

      expect(result1).toEqual(changedState);
      expect(result2).toEqual(changedState);
      expect(result3).toEqual(changedState);
    });
  });
});
