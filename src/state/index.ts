type functionGameObject = () => GameObject;

export const state = (gameObject: functionGameObject) => {
  let lastGameObjectState = gameObject();

  return (newGameObject?: functionGameObject) => {
    if (newGameObject) lastGameObjectState = newGameObject();

    return lastGameObjectState;
  };
};
