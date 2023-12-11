// LSP
{
  // Type interference
  let name = "Kevin";
  // 7 primitive types
  // String, Number, Boolean, null, undefined, BigInt, Symbol

  let newName = name; // Assigned by value
  newName = "My new name";

  let age: string | number = "40";
  age = 40;

  // Object (function, array, object, ... )
}

{
  // any, void, unknown
  let user: any = {};

  user.name = "Alex";
  user.role = "SWE";

  function log(message: unknown) {
    if (typeof message === "string") {
      let newVar = message;
    }
    return message;
  }
}

{
  const a = "Hello";

  // type / interface
  type Kingdom = "Bacteria" | "Protoza" | "Chromista";

  let k: Kingdom;

  k = "Chromista";

  function whichType(): Kingdom {
    return "Bacteria";
  }
}
