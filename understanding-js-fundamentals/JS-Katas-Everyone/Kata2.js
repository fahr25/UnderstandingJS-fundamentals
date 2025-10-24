/* 
 * Kata 2: FizzBuzz from 1 to 20
 * OBJECTIVE** Create your own loop using the following logic**
*/

for(let someNumber = 1; someNumber <= 30; someNumber++) {
  if(someNumber % 3 === 0 && someNumber % 5 === 0) {
    console.log("JitterBug!");
  } else if(someNumber % 3 === 0) {
    console.log("Jitter");
  } else if(someNumber % 5 === 0) {
    console.log("Bug")
  } else {
    console.log(someNumber);
  }
}

