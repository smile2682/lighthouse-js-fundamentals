const moves = ["north", "north", "west", "west", "north", "east", "north"];
let x = 0;
let y = 0;

for (const move of moves) {
  switch (move) {
  case "north":
    y = y + 1;
    break;
  case "south":
    y = y - 1;
    break;
  case "west":
    x = x - 1;
    break;
  case "east":
    x = x + 1;
    break;
  default:
    const position = [x, y];
    console.log(position);
  }
}

const position = [x, y];
const finalPosition = () => {
  console.log(position);
};
finalPosition(moves);
