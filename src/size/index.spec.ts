import { size } from ".";

describe("size(width: number, height: number)", () => {
  it("returns size with width and height", () =>
    expect(size(300, 400)).toMatchObject({ width: 300, height: 400 }));
});
