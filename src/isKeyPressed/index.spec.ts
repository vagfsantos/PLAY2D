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
      const fakeEvent = new KeyboardEvent("keydown", { code: ALT.toString() });
      window.dispatchEvent(fakeEvent);

      const pressed = isKeyPressed(ALT);

      expect(pressed).toBeTruthy();
    });

    describe("and the key had been released", () => {
      it("returns false", () => {
        const keyDownEvent = new KeyboardEvent("keydown", {
          code: ALT.toString()
        });
        const keyUpEvent = new KeyboardEvent("keyup", { code: ALT.toString() });
        window.dispatchEvent(keyDownEvent);
        window.dispatchEvent(keyUpEvent);

        const pressed = isKeyPressed(ALT);

        expect(pressed).toBeFalsy();
      });
    });
  });
});
