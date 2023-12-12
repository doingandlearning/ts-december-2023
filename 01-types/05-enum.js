var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function move(direction) {
    console.log(direction);
}
// move(Direction.Up);
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
var Status;
(function (Status) {
    Status["LG"] = "1920";
    Status["User"] = "User";
    Status["Moderator"] = "Moderator";
})(Status || (Status = {}));
console.log(Status.LG);
