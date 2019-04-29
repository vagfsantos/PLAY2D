export const eachFrame = (command: Function): void => {
  window.requestAnimationFrame(() => {
    command();
    eachFrame(command);
  });
};
