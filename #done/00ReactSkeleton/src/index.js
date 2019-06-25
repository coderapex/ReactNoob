import foods from "./Foods";
import { choice, remove } from "./Helpers";

// console.log(foods());
// get fruits array
let allFruits = foods();

// select a fruit from array
let selectedFruit = choice(allFruits);

console.log("I'd like one " + selectedFruit + ", please");
console.log("Here you go: " + selectedFruit);
console.log("Delicious! May I have another?");

// Run 1 : find fruit
let result = remove(allFruits, selectedFruit);

if (result === undefined) {
  console.log("Fruit NOT found");
}

console.log("I'm sorry, we're all out. We have " + allFruits.length + " left.");

// Run 2 : find same fruit again and see if error is shown
console.log("\n\n=== RUN 2 ===");
result = remove(allFruits, selectedFruit);

if (result === undefined) {
  console.log("Fruit NOT found");
}

console.log("I'm sorry, we're all out. We have " + allFruits.length + " left.");

// Run 3 : find new fruit
console.log("\n\n=== RUN 3 ===");
selectedFruit = choice(allFruits);

console.log("I'd like one " + selectedFruit + ", please");
console.log("Here you go: " + selectedFruit);
console.log("Delicious! May I have another?");

result = remove(allFruits, selectedFruit);

if (result === undefined) {
  console.log("Fruit NOT found");
}

console.log("I'm sorry, we're all out. We have " + allFruits.length + " left.");
