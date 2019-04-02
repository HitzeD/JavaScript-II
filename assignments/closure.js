// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function ocean(){
  const king = 'I am King Neptune';
  console.log(`${king} in the ocean!`);

  function bikiniBottom(){
    console.log(`${king} in Bikini Bottom!`);

    function trench(){
      console.log(`${king} in the dark blue`);
    }
    trench();
  }
  bikiniBottom();
}

console.log(ocean());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
const counter = () => {
  
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log(counter);
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
