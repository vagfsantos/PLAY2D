import { paint } from ".";

const fakeDrawImage = jest.fn();
jest.mock("../context2d", () => ({
  context2d() {
    return { drawImage: (...args: any[]) => fakeDrawImage(...args) };
  }
}));

describe("paint(gameObject)", () => {
  it("calls draw image with given game object", () => {
    const fakeGameObject = {
      height: 1,
      image: new Image(),
      width: 2,
      x: 55,
      y: 2
    };

    paint(fakeGameObject);

    expect(fakeDrawImage).toHaveBeenCalledWith(
      fakeGameObject.image,
      fakeGameObject.x,
      fakeGameObject.y,
      fakeGameObject.width,
      fakeGameObject.height
    );
  });
});
