const olympians = [
  "Michael Phelps",
  "Usain Bolt",
  "Simone Biles",
  "Serena Williams",
  "Katie Ledecky",
];

for (let i = 0; i < olympians.length; i++) {
  console.log(olympians[i]);
}

olympians.forEach((olympian) => console.log(olympian));

let counter = 0;
while (counter < olympians.length) {
  console.log(olympians[counter++]);
}

counter = 0;
while (counter % olympians.length) {
  console.log(olympians[counter++]);
}

for (const olympian of olympians) {
  console.log(olympian);
}

for (const char of olympians[0]) {
  console.log(char);
}

const medallists = {
  "Michael Phelps": 28,
  "Usain Bolt": 8,
  "Simone Biles": 7,
  "Serena Williams": 4,
  "Katie Ledecky": 6,
};

for (const [olympian, medals] of Object.entries(medallists)) {
  console.log(`${olympian} has won ${medals} medals.`);
}
