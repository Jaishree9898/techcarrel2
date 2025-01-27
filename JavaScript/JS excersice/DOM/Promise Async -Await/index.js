// Exercise 1: Basic Promise
// Create a function `getNumber` that returns a Promise. The Promise should resolve with a number
// after 2 seconds.
// Instructions:
// 1. Create a function `getNumber` that returns a Promise.
// 2. Inside the Promise, use `setTimeout` to resolve the number `5` after 2 seconds.
// 3. Handle the resolution of the Promise using `.then()`.


// function getNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 2000)
//   })
// }

// getNumber().then((num) => {
//   console.log(`The number is ${num}`);
// });

// Exercise 2: Chaining Promises
// Create two functions `getFirstName` and `getLastName`, which return promises. Chain them so that
// you get the full name by combining both first and last names.
// Instructions:
// 1. `getFirstName` returns a Promise that resolves with 'Ravi'.
// 2. `getLastName` returns a Promise that resolves with 'Sharma'.
// 3. Chain both promises and log the full name (e.g., 'Ravi Sharma').



// function getFirstName(getLastName) {
//   return new Promise((resolve, reject) => {
//     resolve("Ravi");

//   })

// }

// function getLastName() {
//   return new Promise((resolve, reject) => {
//     resolve("Sharma");
//   })
// }

// getFirstName().then((firstname) => {
//   getLastName().then((lastName) => {
//     console.log(firstname + lastName)
//   })
// })

// Exercise 3: Handling Errors with Promises
// Create a function `getData` that returns a Promise. If the data is fetched successfully, it should
// resolve with 'Data fetched', otherwise, it should reject with an error message.
// Instructions:
// 1. `getData` should randomly either resolve or reject after 2 seconds (use `Math.random()` for
// random decision).
// 2. Handle both the resolved and rejected cases using `.then()` and `.catch()`.








