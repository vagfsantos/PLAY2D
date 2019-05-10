import { start } from ".";
import { canvas } from "../canvas";

const fakeAppendChild = (document.body.appendChild = jest.fn());

describe("start()", () => {
  it("appends canvas to DOM", () => {
    start();

    expect(fakeAppendChild).toHaveBeenCalledWith(canvas());
  });
});
