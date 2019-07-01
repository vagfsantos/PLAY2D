import { eachFrame } from ".";

const fakeWRAF = (window.requestAnimationFrame = jest.fn());

describe("eachFrame(fn: Function)", () => {
  it("calls window.requestAnimationFrame", () => {
    eachFrame(() => "it works");

    expect(fakeWRAF).toHaveBeenCalled();
  });
});
