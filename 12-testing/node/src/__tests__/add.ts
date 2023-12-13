import { add } from "../add";

describe("I want to test something", () => {
  test("Happy path", () => {
    // Arrange     : Given
    // Act		     : When
    // Assert     : Then

    expect(add(1, 2)).toBe(3);
    expect(add(-1, 2)).toBe(1);
  });
  test("It will error on incorrect types", () => {
    // Arrange     : Given
    // Act		     : When
    // Assert     : Then

    expect(() => add(1, "1" as any)).toThrow();
  });
});
