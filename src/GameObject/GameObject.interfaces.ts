export interface GameObjectInterface {

  __attr: GameObjectAttrInterface,

  setAttr(obj: any): void

  update(): void,
  draw(ctx: CanvasRenderingContext2D): void
}

export interface GameObjectAttrInterface {

  width?: number,
  height?: number,
  x?: number,
  y?: number
}