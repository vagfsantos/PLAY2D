import { screen } from ".";
import { canvas } from "../canvas";
import { size } from "../size";

describe("screen | Function", () => {
  it("changes canvas element with new size", () => {
    screen(size(500, 300));

    expect(canvas().width).toEqual(500);
    expect(canvas().height).toEqual(300);
  });
});
