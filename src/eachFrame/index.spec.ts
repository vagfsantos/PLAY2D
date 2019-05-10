import { eachFrame } from ".";

const fakeWRAF = (window.requestAnimationFrame = jest.fn());

describe("eachFrame(fn: Function)", () => {
  it("calls window.requestAnimationFrame", () => {
    eachFrame(() => {});

    expect(fakeWRAF).toHaveBeenCalled();
  });
});
