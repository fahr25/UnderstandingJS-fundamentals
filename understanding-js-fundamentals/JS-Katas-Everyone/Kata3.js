/**  
 * Kata 3: Multiplication table using nested loops 
 * 
 * ** OBJECTIVE ** 
 * Commit 1: "scaffold nested loops"
 * Commit 2: "added multiplication logic"
 * Commit 3: "refactored for readability and spacing"
 * 
*/

// Function with guard clause.
let multiplicationTableGen = (size) => {
  console.log(`Your value: ${size}`);

  if(size <= 0) { // First clause prevents input being less than or equal to 0.
    return console.log("Please enter a number greater than 0.");
  } 
  else if(size > 20) { // Second clause prevents input being greater than 20.
    return console.log("Do you really need me to multiply any higher?...");
  } 
  else {
    for(let row = 1; row <= size; row++) {
      // Table variable creates a string version of the table.
      let table = "";
      for(let column = 1; column <= size; column++) {
        // After values are multiplied, a tab space is added.
        table += (row * column) + "\t";
      }

      // This print the table.
      console.log(table);
    }
  }

};


// ** TESTS ** 
// This tests for responds when a genative value is used.
console.log("Test 1");
multiplicationTableGen(-9);
console.log()

// This tests for responds when 0 is used as the value.
console.log("Test 2");
multiplicationTableGen(0);
console.log()

// This tests the function with a small value.
console.log("Test 3");
multiplicationTableGen(5);
console.log()

// This test the function above with our desired size but larger.
console.log("Test 4");
multiplicationTableGen(18);
console.log()

// This tests the function above with a value above 20.
console.log("Test 5");
multiplicationTableGen(23);
console.log()

