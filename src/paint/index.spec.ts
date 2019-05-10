import { paint } from ".";

const fakeDrawImage = jest.fn();
jest.mock("../context2d", function() {
  return {
    context2d() {
      return { drawImage: (...args: any[]) => fakeDrawImage(...args) };
    }
  };
});

describe("paint(gameObject)", () => {
  it("calls draw image with given game object", () => {
    const fakeGameObject = {
      image: new Image(),
      x: 55,
      y: 2,
      width: 2,
      height: 1
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
