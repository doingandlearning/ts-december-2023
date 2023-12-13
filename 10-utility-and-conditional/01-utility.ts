// We already have a type ...

/**
 * Extract: Allows you to pick types that are present in another type.
 * Example: In a system where you handle different types of notifications (email, SMS, push),
 * you might want to filter out only boolean options from a settings type.
 */

type NotificationSettings = number | string | "email" | true;
type FilteredSettings = Extract<NotificationSettings, string>;

/**
 * NonNullable: Removes null and undefined from a type
 * Example: When fetching data, sometimes the data might be null or undefined.
 * Use NonNullable to ensure you handle only the valid data.
 */

type UserAgeData = { age?: number | null | string };
type ValidAge = NonNullable<UserAgeData["age"]>;

/**
 * ReturnType: Gets the return type of a function.
 * Example: For an API call that returns a JSON object, you can use ReturnType to
 * infer the data's type.
 */

function getUser(userId: number) {
  return {
    name: "Geoff",
    team: "News App BE",
    previousLanguages: ["Android", "Java", "Kotlin"],
  };
}

type UserData = ReturnType<typeof getUser>;

/**
 * InstanceType: Gets the instance type of a class constructor type.
 * Example: When working with Object-Oriented Programming (OOP) in TypeScript,
 * you often deal with classes.
 * InstanceType can be used to infer the type of an instance of a class.
 */

type UserClass = { new (): UserInstance };
type UserInstance = { id: number; name: string };

type UserObject = InstanceType<UserClass>; // Results in { id: number, name: string }

class UserWithoutTS {
  public name = "BBC";

  constructor(name) {
    this.name = name;
  }
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: {},
  boris: {},
  mordred: {},
};

type CatDict = {
  [catname: string]: CatInfo;
};

const newCats: CatDict = {
  garfield: {
    age: 55,
    breed: "ginger",
  },
};
