export interface Shape {
  area?: number;
  type: "circle" | "square" | "rightTriangle" | "rectangle";
  getArea: () => number;
}

export interface Circle extends Shape {
  radius: number;
  type: "circle";
}

export interface Rectangle extends Shape {
  length: number;
  width: number;
  type: "rectangle";
}

export interface RightTriangle extends Shape {
  base: number;
  height: number;
  type: "rightTriangle";
}

export interface Square extends Shape {
  width: number;
  type: "square";
}
