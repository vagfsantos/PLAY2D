import { canvas } from ".";

describe("canvas | Function", () => {
  it("returns a canvas element", () =>
    expect(canvas().tagName).toEqual("CANVAS"));

  it("returns the same canvas element from closure", () => {
    const canvas1 = canvas();
    const canvas2 = canvas();

    const isSameCanvas = canvas1 === canvas2;

    expect(isSameCanvas).toBeTruthy();
  });
});
