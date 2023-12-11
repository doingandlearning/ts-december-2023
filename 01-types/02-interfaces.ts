type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };
const bird3: BirdInterface = bird1; // Duck Typing

type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdType;

interface Peacock extends BirdType {
  colourful: true;
  flies: false;
}

interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}

interface Chicken {
  laysEggs: true;
}

let owl: Owl = { wings: 2 };
let chicken: Chicken = { wings: 2 };
