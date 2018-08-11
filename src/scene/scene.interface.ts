export interface World {
  addScene(scene: any): World;
  start(): void;
}

export interface WorldSceneState {
  total: number;
  current: number;
}
