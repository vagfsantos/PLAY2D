import { ALT } from "./../keyboard/index";
import { isKeyPressed } from ".";

describe("Function | isKeyPressed", () => {
  describe("when given key is not being pressed", () => {
    it("returns false", () => {
      const pressed = isKeyPressed(ALT);

      expect(pressed).toBeFalsy();
    });
  });

  describe("when given key is being pressed", () => {
    it("returns true", () => {
      const fakeEvent = new KeyboardEvent("keyDown", { code: ALT.toString() });
      window.dispatchEvent(fakeEvent);

      const pressed = isKeyPressed(ALT);

      expect(pressed).toBeFalsy();
    });
  });
});
