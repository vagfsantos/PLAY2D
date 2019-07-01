import { by } from ".";

describe("By | Function", () => {
  it("returns a valid Vector2D with x and y property", () =>
    expect(by(300, 200)).toMatchObject({ x: 300, y: 200 }));
});
