var PI = 3.14;

// Types as Shapes
// Shape => Circle(radius, type, area), Square(width, type, area),
// Triangle(base,height,type, area)
// , Rectangle(length, width, type, area)
// Properties

interface Shape {
  area?: number;
  type: "circle" | "square" | "rightTriangle" | "rectangle";
}

interface Circle extends Shape {
  radius: number;
  type: "circle";
}

function getCircleArea(radius) {
  return radius * radius * PI;
}

function getRectangleArea(length, width) {
  return length * width;
}

function getSquareArea(width) {
  return getRectangleArea(width, width);
}

function getRightTriangleArea(base, height) {
  return (base * height) / 2;
}

export function getArea(shape) {
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape.radius);
      break;
    case "rectangle":
      shape.area = getRectangleArea(shape.length, shape.width);
      break;
    case "square":
      shape.area = getSquareArea(shape.width);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(shape.base, shape.height);
      break;
  }
}
