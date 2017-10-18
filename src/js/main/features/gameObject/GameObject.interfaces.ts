interface GameObject {

  type: string;
}

export interface $Rect extends GameObject {

  x: number;
  y: number;
  width: number;
  height: number;
  background: string
}
