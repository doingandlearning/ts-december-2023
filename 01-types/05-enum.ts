enum Direction {
  Up = 1,
  Down = 2,
  Left,
  Right = 4,
}

type DirectionTypes = 0 | 1 | 2 | 3;

function move(direction: Direction) {
  console.log(direction);
}

// move(Direction.Up);

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

enum Status {
  LG = "1920",
  User = "User",
  Moderator = "Moderator",
}

type User = "User" | "Admin" | "Tech";

console.log(Status.LG);
