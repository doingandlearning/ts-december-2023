import { getArea } from "./01_legacy_code_starter";

var circle = { type: "circle", radius: 4 };
getArea(circle);
console.log(circle);

var rectangle = { type: "rectangle", length: 7, width: 4 };
getArea(rectangle);
console.log(rectangle);

var square = { type: "square", width: 5 };
getArea(square);
console.log(square);

var rightTriangle = { type: "rightTriangle", base: 9, height: 4 };
getArea(rightTriangle);
console.log(rightTriangle);
