export interface World {
  addScene(scene: any): World;
  start(): void;
}

export interface WorldState {
  SCENES: {
    CURRENT: number;
    TOTAL: number;
  }
}
