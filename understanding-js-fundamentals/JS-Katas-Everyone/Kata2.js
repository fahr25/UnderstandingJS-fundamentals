// Kata 2: FizzBuzz from 1 to 20
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 2: "added fizzbuzz logic"
// Commit 3: "refactored with clear variable and comments"

for(let i = 1; i <= 20; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log("JitterBug!");
  } else if(i % 3 === 0) {
    console.log("Jitter");
  } else if(i% 5 === 0) {
    console.log("Bug")
  } else {
    console.log("Something went wrong...");
  }
}

