import { gameObject } from ".";

describe("gameObject(image, position, size)", () => {
  it("returns a gameObject with image, position and size", () =>
    expect(
      gameObject(new Image(), { x: 1, y: 2 }, { width: 1, height: 2 })
    ).toMatchObject({
      image: new Image(),
      x: 1,
      y: 2,
      width: 1,
      height: 2
    }));
});
