/**  
 * Kata 3: Multiplication table using nested loops 
 * 
 * ** OBJECTIVE ** 
 * Commit 1: "scaffold nested loops"
 * Commit 2: "added multiplication logic"
 * Commit 3: "refactored for readability and spacing"
 * 
*/


for(let row = 1; row <= 5; row++) {
  let table = "";

  for(let column = 1; column <= 5; column++) {
    table += (row * column) + "\t";
  }

  console.log(table);
}

// Stretch Goal: Guard clause example
function printNumber(num) {
  if (num <= 0) return console.log("Please enter a positive number.");
  console.log("Number:", num);
}