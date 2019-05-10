import { canvasWith } from ".";
import { canvas } from "../canvas";

describe("canvasWith | Function", () => {
  it("changes canvas element with new size", () => {
    canvasWith(500, 300);

    expect(canvas().width).toEqual(500);
    expect(canvas().height).toEqual(300);
  });
});
