const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

let plants = 20;

let week = plants * 2

let area_plant = 0.8;

const plant_area = plants* area_plant;

const per_area = (plant_area / area) * 100;


// console.log(per_area);

if (per_area > 80) {
    console.log("Prune plants to stop growing")

} else if (per_area <= 80 && per_area > 50) {
    console.log("Just monitor plants")

} else {
    console.log("Plant more plants")
}
