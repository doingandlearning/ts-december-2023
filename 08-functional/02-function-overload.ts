task("default", ["scripts", "styles"]);

task("scripts", ["lint"], () => {});

task("styles", () => {});

function task(name: string, callback: VoidFunction): void;
function task(
  name: string,
  dependencies: string[],
  callback: VoidFunction
): void;
function task(name: string, dependencies: string[]): void;

function task(
  name: string,
  param2: string[] | VoidFunction,
  param3?: VoidFunction
) {
  if (typeof param2 === "function" && param3 !== null) {
    throw new Error();
  }
  if (typeof param3 !== "function" && param3 !== null) {
    throw new Error();
  }
}

task(
  "what",
  () => {
    console.log("Two callbacks?");
  },
  () => {
    console.log("That's not supported, but the types say yes!");
  }
);

function overload(name: string): string;
function overload(age: number): string;
function overload(isSingle: boolean): number;
function overload(value: string | number | boolean): string | number {
  switch (typeof value) {
    case "string":
      return `Hello, my name is ${value}.`;
    case "number":
      return `Hello, my age is ${value}.`;
    case "boolean":
      return `Hello, I ${value ? "am" : "am not"} single.`;
    default:
      throw new Error("Invalid use of function.");
  }
}

console.log(overload("Kevin"));
console.log(overload(39));
console.log(overload(false));
