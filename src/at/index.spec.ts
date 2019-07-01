import { at } from ".";

describe("At | Function", () => {
  it("returns a valid Vector2D with x and y property", () =>
    expect(at(300, 200)).toMatchObject({ x: 300, y: 200 }));
});
