import { Circle, Rectangle, RightTriangle, Shape, Square } from "./shape-lib";

var PI = 3.14;

// Types as Shapes
// Shape => Circle(radius, type, area), Square(width, type, area),
// Triangle(base,height,type, area)
// , Rectangle(length, width, type, area)
// Properties

function getCircleArea(circle: Circle) {
  const { radius } = circle;
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

export function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape as Circle);
      break;
    case "rectangle":
      //
      shape.area = getRectangleArea(
        (shape as Rectangle).length,
        (shape as Rectangle).width
      );
      break;
    case "square":
      shape.area = getSquareArea((shape as Square).width);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(
        (shape as RightTriangle).base,
        (shape as RightTriangle).height
      );
      break;
  }
}
