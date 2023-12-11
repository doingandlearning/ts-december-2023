function firstElement(a: any[]) {
  return a[0];
}

const a_s = ["one", "two", "three", "four"];
const a_n = [1, 2, 3, 4];
const a_m = ["one", 2, "three", 4];

console.log(firstElement(a_s));
console.log(firstElement(a_n));

interface Box {
  contents: any;
}

console.log(`Hello, it's ${new Date()}`);
console.log(`Less config!`);
