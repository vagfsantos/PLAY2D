import { add } from ".";
import { at } from "../at";

describe("add(v1: Vector2d, v2: Vector2d)", () => {
  it("returns a sum of two Vector2d", () =>
    expect(add(at(1, 2), at(2, 1))).toMatchObject({ x: 3, y: 3 }));
});
