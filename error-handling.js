// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (error) {
    if(error instanceof TypeError){
      console.error("Error: Cannot calculate sum of null or undefined array");
    }else{
      throw error;
    }
  }
 
  return sum;
}

let res = sum(null);
console.log(res);

// 2.
// tests
sayName("Alex");
sayName(1);
// Your code here
function sayName(name) {
  if (typeof name !== 'string') {
    throw new TypeError("Invalid name! Must be a string!");
  }
  console.log("Name:", name);
}

try {
  sayName("John"); // Test case 1: Valid name
  sayName(123);    // Test case 2: Invalid name (not a string)
  sayName("Alice");// Test case 3: Valid name
} catch (error) {
  console.log("Error:", error.message); // Print the error message if an error is thrown
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet({});
} catch (error) {
  console.log("Hello world.");
}
