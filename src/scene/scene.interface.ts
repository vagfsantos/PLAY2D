export interface Scene {
  render(): void;

  setMapTo(map: any): void;
  getMap(): any;

  setCameraTo(camera: any): void;
  getCamera(): any;

  addGameObject(...gameObject: any[]): void;
  getGameObjects(): any[];
}
