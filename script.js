// Constants
const PI = 3.1415;
const radius = 5;
const minSpacePerPlant = 0.8;

// Calculate maximum capacity of the garden
const maxCapacity = ~~(PI * radius * radius / minSpacePerPlant);

// Initial number of plants
const initialPlants = 20;

// Predictions for 1, 2, and 3 weeks of growth
const growth1 = initialPlants * 2;
const growth2 = growth1 * 2;
const growth3 = growth2 * 2;

// Control flow decisions for each week
let decision1, decision2, decision3;
const predictedPlants1 = growth1;
const predictedPlants2 = growth2;
const predictedPlants3 = growth3;

if (predictedPlants1 > 0.8 * maxCapacity) {
    decision1 = "Prune";
} else if (predictedPlants1 >= 0.5 * maxCapacity && predictedPlants1 <= 0.8 * maxCapacity) {
    decision1 = "Monitor";
} else {
    decision1 = "Plant more";
}

if (predictedPlants2 > 0.8 * maxCapacity) {
    decision2 = "Prune";
} else if (predictedPlants2 >= 0.5 * maxCapacity && predictedPlants2 <= 0.8 * maxCapacity) {
    decision2 = "Monitor";
} else {
    decision2 = "Plant more";
}

if (predictedPlants3 > 0.8 * maxCapacity) {
    decision3 = "Prune";
} else if (predictedPlants3 >= 0.5 * maxCapacity && predictedPlants3 <= 0.8 * maxCapacity) {
    decision3 = "Monitor";
} else {
    decision3 = "Plant more";
}

// Display results
console.log("Predicted plant growth after 1 week:", growth1, "plants");
console.log("Decision after 1 week:", decision1);

console.log("Predicted plant growth after 2 weeks:", growth2, "plants");
console.log("Decision after 2 weeks:", decision2);

console.log("Predicted plant growth after 3 weeks:", growth3, "plants");
console.log("Decision after 3 weeks:", decision3);
