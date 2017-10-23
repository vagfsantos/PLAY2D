export abstract class $GameObject {
  abstract init( initMethod: Function ): void
  abstract update( updateMethod: Function ): void
  abstract render( updateMethod: Function ): void
}

export class $GameObjectConfig {
  x: number;
  y: number;
  width?: number;
  height?: number;
}
