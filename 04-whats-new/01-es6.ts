// 1. Default parameters

const SCREEN_BASE = 10;

function areaOfRect(length = SCREEN_BASE, width: number = length) {
  return length * width;
}

const rect1 = areaOfRect(10, 5);
const square = areaOfRect(10);
const baseUnit = areaOfRect();

// 2. Template literals

const greeting =
  "Hello, rect1 you have an area of " + rect1 + " units squared.";
console.log(greeting);
const greetingLiteral = `Hello, rect1 you have an area of ${rect1} units squared.

I can do new lines!`;
console.log(greetingLiteral);

// 3. Object literals
function getLaptop(make, model, year) {
  return {
    make,
    model,
    year,
  };
}

// 4. Arrow functions

function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => {
  console.log("I'm going to do some adding up now ... ");
  return a + b;
};
console.log(addArrow(1, 2));

function whodis() {
  console.log(this);
}

whodis();

const whodisArrow = () => {
  console.log(this);
};

whodisArrow();

// 5. let, const and var

// let can redefined
// const is const

// var? oldies ... Kyle Simpson

// function assignFunction() {
//   console.log("Before the defining block", varVariable);
//   if (true) {
//     let varVariable = "I am here";
//   }
//   console.log("After the defining block", varVariable);
// }

// assignFunction();

function simulateDom() {
  const pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  };
  for (let i = 1; i <= 3; i++) {
    // 1
    const element = pseudoDom["button" + i];
    element.click = function () {
      return "Item " + i + " is clicked."; // 2
    };
  }
  console.log(pseudoDom.button1.click());
  console.log(pseudoDom.button2.click());
  console.log(pseudoDom.button3.click()); // 3
  return pseudoDom;
}

simulateDom();

// Item 1 is clicked, Item 2 is clicked, Item 3 is clicked
// Item 3 is clicked, Item 3 is clicked, Item 3 is clicked
// Item 4 is clicked, Item 4 is clicked, Item 4 is clicked

const newArray = [
  { name: "Kevin", location: "NI" },
  { name: "Neil", location: "Manchester" },
];
const newerArray = structuredClone(newArray); // assignment by reference  // [1,2,3]

newerArray[0].location = "Switzerland";
console.log(newArray);
console.log(newerArray);

function addAll(...nums: number[]) {
  return nums.reduce((a, c) => a + c, 0);
}

// ... ...

console.log(addAll(1, 2, 3, 4, 5, 6, 5, 3, 3, 4, 12, 2345, 245, 25, 235, 235));

console.log(Number.MAX_SAFE_INTEGER);
