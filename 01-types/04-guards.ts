function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

padLeft("£", "3.30");
padLeft(10, "Current PM");

function add(a: number, b: number) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("both should be number");
  }
  return a + b;
}

add(2, "3");
