export const state = (gameObject: getGameObject) => {
  let lastGameObjectState = gameObject();

  return (newGameObject?: getGameObject) => {
    if (newGameObject) {
      lastGameObjectState = newGameObject();
    }

    return lastGameObjectState;
  };
};
