type IsPressed = (keyCode: number) => boolean;

export const isKeyPressed = ((): IsPressed => {
  const keysPressed: any = {};

  window.addEventListener("keydown", ({ keyCode }) => {
    keysPressed[keyCode] = true;
  });

  window.addEventListener("keyup", ({ keyCode }) => {
    keysPressed[keyCode] = false;
  });

  return (keyCode: number): boolean => keysPressed[keyCode];
})();
