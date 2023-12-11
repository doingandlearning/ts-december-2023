function* generatorFunction() {
  yield "🍑";
  yield "🍉";
  yield "🍋";
  yield "🥭";
}

const fruitGenerator = generatorFunction();

const fruitArray = [...fruitGenerator];

console.log(fruitArray);

function* fibon(): Generator<string> {
  let first = 1;
  let second = 1;
  // 1, 1, 2, 3, 5, 8,
  while (true) {
    let sum = second + first;
    yield `The next value is ${sum}`; //
    if (sum > 1000) {
      throw new Error("Too big!!");
    }
    first = second;
    second = sum;
  }
}

const sequence = fibon();

console.time();
try {
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
  console.log(sequence.next());
} catch (error) {
  console.log("There was an error - but I want to keep going!");
  console.log(sequence.next());
}

console.timeEnd();
