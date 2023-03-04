const smartGarbage = function (trash, bins) {
  // Your code in here ...
  switch (trash) {
    case "waste":
      bins.waste++;
      break;
    case "recycling":
      bins.recycling++;
      break;
    case "compost":
      bins.compost++;
      break;
    default:
      // Invalid trash type, do nothing
      break;
  }

  // Return the updated bins object
  return bins;
};

//driving speed and time practice
const carPassing = function (cars, speed) {
  // Your code in here ...
  // Create a new object with the speed and current time properties
  const newCar = {
    speed: speed,
    time: Date.now(),
  };

  // Add the new object to the cars array
  cars.push(newCar);

  // Return the updated cars array
  return cars;
};
const cars = [
  { time: 1568329654807, speed: 40 },
  { time: 1568329821632, speed: 42 },
  { time: 1568331115463, speed: 35 },
];

carPassing(cars, 38); // [
//   { time: 1568329654807, speed: 40 },
//   { time: 1568329821632, speed: 42 },
//   { time: 1568331115463, speed: 35 },
//   { time: <current time>, speed: 38 }
// ]

// vegetable practice
function judgeVegetable(vegetables, metric) {
  // Create a variable to store the highest ranking vegetable
  let bestVeggie = vegetables[0];

  // Iterate over all the vegetables and find the one with the highest ranking
  for (let i = 1; i < vegetables.length; i++) {
    if (vegetables[i][metric] > bestVeggie[metric]) {
      bestVeggie = vegetables[i];
    }
  }

  // Return the name of the submitter of the highest ranking vegetable
  return bestVeggie.submitter;
}
// Here's an example usage of the function:
const veggies = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

judgeVegetable(veggies, "redness"); // 'Old Man Franklin'
judgeVegetable(veggies, "plumpness"); // 'Sally Tomato-Grower'
