type IsPressed = (code: number) => boolean;

export const isKeyPressed = ((): IsPressed => {
  const pressedKeys: any = {};

  window.addEventListener("keydown", ({ code }) => {
    pressedKeys[code] = true;
  });

  window.addEventListener("keyup", ({ code }) => {
    pressedKeys[code] = false;
  });

  return (code: number): boolean => pressedKeys[code];
})();
