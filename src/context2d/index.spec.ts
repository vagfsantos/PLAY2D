import { context2d } from ".";
import { canvas } from "../canvas";

const fakeGetContext = (canvas().getContext = jest.fn());

describe("context2d | Function", () => {
  it("returns canvas 2d context", () => {
    context2d();

    expect(fakeGetContext).toHaveBeenCalledWith("2d");
  });
});
