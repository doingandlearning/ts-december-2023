// ### 1. **Type-Safe Property Access**

// `keyof` can be used to create functions that safely access properties of an
// object. This ensures that the property being accessed is valid for the given
// object type.

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Example usage:
type User = { name: string; age: number };
const user: User = { name: "Alice", age: 30 };
const userName = getProperty(user, "name"); // Type is string

// ### 2. **Creating Partial Types**

// Using `keyof` in combination with mapped types, you can create a partial type
// of an existing type, where all properties are optional.

type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Example usage:
type PartialUser = Partial<User>;

// ### 3. **Filtering Keys by Value Type**

// `keyof` can be used to extract keys of an object that are of a specific type.

type KeysMatching<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

// Example usage:
type NumberKeysOfUser = KeysMatching<User, number>; // "age"
type StringKeysOfUser = KeysMatching<User, string>; // "age"
type BoolKeysOfUser = KeysMatching<User, boolean>; // "age"

// ### 4. **Constraining Function Arguments**

// `keyof` is useful for constraining function arguments to ensure they
// are valid keys of a specific object type.

function sortBy<T>(array: T[], key: keyof T): T[] {
  // Sorting logic...
  return array;
}

// Example usage:
sortBy(
  [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ],
  "age"
);
