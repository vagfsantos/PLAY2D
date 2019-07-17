import { isKeyPressed } from '.';
import { SPACE, A } from '../keyboard'

describe("isKeyPressed(key: string)", () => {
  describe("when a key is pressed", () => {
    it("returns true for given key", () => {
      const event = new KeyboardEvent('keydown', { code: `${SPACE}` });

      window.dispatchEvent(event);

      expect(isKeyPressed(SPACE)).toEqual(true);
    });

    it("returns false for other key", () => {
      const event = new KeyboardEvent('keydown', { code: `${A}` });

      window.dispatchEvent(event);

      expect(isKeyPressed(SPACE)).toEqual(true);
    });

    describe("and a key is released", () => {
      it("returns false for given key", () => {
        const code = `${SPACE}`
        const keyDown = new KeyboardEvent('keydown', { code });
        window.dispatchEvent(keyDown);

        const keyUp = new KeyboardEvent('keyup', { code });
        window.dispatchEvent(keyUp);

        expect(isKeyPressed(SPACE)).toEqual(false);
      });

      it("returns true for other key", () => {
        const code = `${A}`
        const keyDown = new KeyboardEvent('keydown', { code });
        window.dispatchEvent(keyDown);

        const keyUp = new KeyboardEvent('keyup', { code: `${SPACE}` });
        window.dispatchEvent(keyUp);

        expect(isKeyPressed(A)).toEqual(true);
      });
    })
  });
});
