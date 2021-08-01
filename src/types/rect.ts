export interface IRectBase {
  x: number;
  y: number;
  w: number;
  h: number;
  zIndex: number;
}

export interface IRectComponent extends IRectBase {
  text: string;
  bgColor: string;
  onChange: () => void;
}
