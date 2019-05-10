import { image } from "./index";

describe("image(source)", () => {
  it("returns a new image data with given source", () => {
    expect(image("some-image")).toBeInstanceOf(Image);
    expect(image("some-img").src).toContain("some-img");
  });
});
