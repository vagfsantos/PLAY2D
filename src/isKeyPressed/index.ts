type IsPressed = (code: number) => boolean;
interface IKeyListPressedStatus {
  [code: string]: boolean;
}

export const isKeyPressed = ((global): IsPressed => {
  const keysPressed: IKeyListPressedStatus = {};

  global.addEventListener("keydown", ({ code }) => {
    keysPressed[code] = true;
  });

  global.addEventListener("keyup", ({ code }) => {
    keysPressed[code] = false;
  });

  return code => !!keysPressed[code];
})(window);
