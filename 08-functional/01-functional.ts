// functions

// everything is a function
// no side effects
// stateless
// pure functions

// Multi-paradigm

// Haskell ...

// Easier to test
// Pure -> input => output
// No side effects -> no changing global, no effecting the world,
//   -> useEffect()

// Easier to reason about
// Concurrency
// Caching

// 1. Immutability and Pure Functions:
// Functional programming emphasizes the use of pure functions that do not modify
// their inputs and always return the same output for the same inputs. This approach
// can help to reduce the complexity of your code and make it easier to reason about.

interface Person {
  name: string;
  age: number;
}

const getGreeting = (person: Person): string => {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
};

const person: Person = { name: "Ethan", age: 11 };
const greeting: string = getGreeting(person);

// 2. Higher-Order Functions
// Functional programming also emphasizes the use of higher-order functions that
// take one or more functions as inputs and/or return a function as output. This
// approach can help to make your code more modular and reusable.

function mapPerson<T>(fn: (person: Person) => T) {
  return (persons: Person[]): T[] => {
    return persons.map(fn);
  };
}

const persons: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 40 },
];

function goodBye(person: Person) {
  console.log(`Goodbye ${person.name}!`);
}

const greetings: string[] = mapPerson(goodBye)(persons);

console.log(persons.map((person) => `<li>${person.name}</li>`));

// 3. Composability
// Functional programming also emphasizes the use of function composition, which
// is the process of combining two or more functions to create a new function.
// This approach can help to make your code more concise and readable.

// function doAllTheSorting() {
//   doSecondSort(doFirstSort());
// }

function doFirstSort() {}

function doSecondSort() {}

console.log(
  persons
    .filter((person) => person.age > 35)
    .map((person) => `<li>${person.name}</li>`)
    .toReversed()
    .toSorted()
);

// 4. Immutability
// Functional programming also emphasizes the use of immutable data structures
// that cannot be modified after creation. This approach can help to prevent bugs
// related to unintended modifications of data.

[].sort();
const newArray = [1, 2, 3].splice(1); // .reverse()

// 5. Currying

function add(a, b) {
  return a + b;
}

function add5(a) {
  return add(a, 5);
}

const buttonStyles = (theme) => (size) => ({
  backgroundColor: theme.primaryColor,
  padding: size === "large" ? "20px" : "10px",
  // ... other styles
});

const DarkThemeButton = buttonStyles(darkTheme);
const largeDarkThemeButtonStyles = darkThemeButton("large");
