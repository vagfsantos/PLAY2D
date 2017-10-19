export abstract class $GameObject {
  abstract init( initMethod: Function ): void
  abstract update( updateMethod: Function ): void
  abstract render( updateMethod: Function ): void
}
