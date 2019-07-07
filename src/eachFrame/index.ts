export const eachFrame = (command: anyFunction): void => {
  window.requestAnimationFrame(() => {
    command();
    eachFrame(command);
  });
};
