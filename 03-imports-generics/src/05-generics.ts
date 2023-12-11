const arr: Array<number> = []; // number[]

arr.push(1);
arr.push(2);
arr.push("new");

function firstElement<OfType>(a: Array<OfType>) {
  return a[0];
}

const firstElementArrow = <T>(a: Array<T>) => a[0];

const a_s = ["one", "two", "three", "four"];
const a_n = [1, 2, 3, 4];
const a_m = ["one", 2, "three", 4];

const value = firstElement(a_m);

function reverseArray<T>(items: T[]) {
  return items.reverse();
}

const reversed = reverseArray(a_s);

{
  type Nullish<T> = T | null | undefined;

  type NullishString = String | null | undefined;

  let name: Nullish<string>;
  name = undefined;
  name = null;
  name = "Also a string";
}
