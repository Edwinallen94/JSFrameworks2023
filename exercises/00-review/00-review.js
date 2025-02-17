<<<<<<< HEAD
import { greet } from "./greet.js"; // I am importing the 'greet' function from the 'greet.js' file
=======
import greet from './greet.js';
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb

/**
 * Solve this problem using ES modules (ESM).
 * ES modules allow you break up your code into multiple files (or modules), and then share code between different files.
 * To learn about ES modules:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#default_exports_versus_named_exports
 *
 * 1. Create a new file in the same folder as this file called "greet.js". (NOTE that you will need to include the extension ".js" in order for this to work)
 * 2. Copy the "greet" function below and paste it into the new file "greet.js"



 * 3. Export the "greet" function from "greet.js"
 * 4. Import the function at the top of this file using the name "greet"
 * 
 * If you see "Error [ERR_MODULE_NOT_FOUND]:", then your export or import is not correct.
 *
 * ES6 Modules Reference:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * @see https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 */

/**
 *  Return the highest number in the array
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 *
 * highestNumber([1, 10, 2, 3, 4]) // 10
 * highestNumber([-1, -5, -4]) // -1
 *
 **/

const highestNumber = (array) => {
  // Write your answer here
<<<<<<< HEAD
  return array.reduce((a, b) => Math.max(a, b), -Infinity); // the highestNumber function utilizes the reduce method and the Math.max function to find the maximum value within an array of numbers
=======
  return array.reduce((a, b) => Math.max(a, b), -Infinity);
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
};

/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

const combineArray = (array1, array2) => {
  // Write your answer here
<<<<<<< HEAD
  return [...array1, ...array2]; //the combineArray function takes two arrays as input and returns a new array that contains all the elements from both input arrays combined
=======
  const array = [...array1, ...array2];
  return array;
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
};

/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

const obj1 = { name: "Edwin", age: 29 };
const obj2 = { occupation: "Developer", city: "New York" };
const combineObject = (obj1, obj2) => {
  // Write your answer here
<<<<<<< HEAD
  return { ...obj1, ...obj2 }; // the combineObject function takes two objects as input and returns a new object that contains all the properties from both input objects combined.
=======
  let combo = { ...obj1, ...obj2 };
  return combo;
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
};

/**
 * Please use the higher order function map to solve this problem.
 * Multiplies each value in an array by two
 * @param {array} arr an array of numbers e.g. [1, 3, 5]
 * @returns {array} new array, with each value doubled e.g. [2, 5, 10]
 */

const doubleValues = (arr) => {
  // Write your answer here
<<<<<<< HEAD
  return arr.map((value) => value * 2); //  the doubleValues function takes an array as input and returns a new array where each element is doubled by multiplying it by 2 using the map method.
=======
  let doubles = arr.map((num) => num * 2); // each num gets multiplied by 2
  return doubles;
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
};

/**
 * * Please use the higher order function filter to solve this problem.
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */
const onlyEvenValues = (arr) => {
  // Write your answer here
<<<<<<< HEAD
  return arr.filter((value) => value % 2 === 0); // onlyEvenValues function takes an array as input and returns a new array that contains only the even values from the original array using the filter method.
=======
  return arr.filter((num) => num % 2 === 0); //divisibility by 2 and remainder is 0 it is an even number
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
};

/**
 * Create a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercase and lowercase) removed.
 * Every character in the new string should be lowercase.
 * @example
 * removeVowels('Elie') // ('l')
 * removeVowels('TIM') // ('tm')
 * removeVowels('ZZZZZZ') // ('zzzzzz')
 */

/**
 * Remove all vowels from within a string and lower case each letter
 * @param {string} str
 * @returns {string} string with the vowels removed
 * @example
 *  removeVowels('Elie') // ('l')
 *  removeVowels('TIM') // ('tm')
 *  removeVowels('ZZZZZZ') // ('zzzzzz')
 */
const removeVowels = (str) => {
  // Write your answer here
<<<<<<< HEAD
  const vowels = ["a", "e", "i", "o", "u"];
  let lowercaseStr = str.toLowerCase();
  let result = "";

  for (let i = 0; i < lowercaseStr.length; i++) {
    if (!vowels.includes(lowercaseStr[i])) {
      result += lowercaseStr[i];
    }
  }
  return result;
=======
  const vowels = ["a", "e", "i", "o", "u"]; // vowels so we know what we are looking for
  let newStr = str.toLowerCase(); // makes any string lowercase and easier to filter thru
  let leftOver = ""; // we store left over letters after taking out vowels
  for (let i = 0; i < newStr.length; i++) {
    // filters thru each letter in a string
    if (!vowels.includes(newStr[i])) {
      // if not a vowel it gets added to leftOver
      leftOver += newStr[i];
    }
  }
  return leftOver;
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
};

/**
 * Solve this problem using the ternary operator.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * Solve this problem using the ternary operator.
 * @returns {string}
 */

const getIsHungryText = () => {
  //don't change this variable
  let isStomachEmpty = false;
  /* convert this if else statement into a ternary expression */

<<<<<<< HEAD
  let isHungry = isStomachEmpty ? "Go eat something." : "Keep coding!"; // A shorter Ternary way of solving the problem instead of using the if else statement
=======
  let isHungry = isStomachEmpty ? "Go eat something." : "Keep coding!";
  // if (isStomachEmpty) {
  //   isHungry = "Go eat something.";
  // } else {
  //   isHungry = "Keep coding!";
  // }

>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
  return isHungry;
};

// let isHungry;
// if (isStomachEmpty) {
//   isHungry = "Go eat something.";
// } else {
//   isHungry = "Keep coding!";
// }

/**
 * Refactor this to use destructuring. For an example of destructuring,
 * @see https://dmitripavlutin.com/javascript-object-destructuring/
 * @return Function should return tomorrow's temperature
 */

const getTempOfTomorrow = () => {
  // Do not change me
  const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79,
  };

  // Start of what you should change
<<<<<<< HEAD
  const today = AVG_TEMPERATURES.today;
  const tomorrow = AVG_TEMPERATURES.tomorrow;

  const getTempOfTomorrow = () => {
    const AVG_TEMPERATURES = {
      today: 77.5,
      tomorrow: 79,
    };

    const { today, tomorrow } = AVG_TEMPERATURES;
    return `Today's temperature is ${today}.\nTomorrow's temperature is ${tomorrow}`;
  };
=======
  const { today, tomorrow } = AVG_TEMPERATURES;
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
  // End of what you should change
  return `Today's temperature is ${today}.\nTomorrow's temperature is ${tomorrow}`;
};

/**
 * Please use the high order function reduce to solve this problem. For an example of reduce,
 * @see https://www.airpair.com/javascript/javascript-array-reduce
 *
 * Given an array of numbers, return the sum
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */
const addItems = (arr) => {
  // Write your answer here
<<<<<<< HEAD
  return arr.reduce((accumulate, currentVal) => accumulate + currentVal); //, the addItems function takes an array of numbers as input and returns the sum of all the numbers using the reduce method.
=======
  return arr.reduce((accum, currentValue) => accum + currentValue);
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
};

/**
 * Remove duplicate values from an array.
 * @example
 * [1,1,2,2,3,3] // [1,2,3]
 * @param {array} arr
 * remove duplicates elements from an array
 *  hint you can use sets (optional) as a way to solve this problem.
 * @return {array}
 *
 */

const removeDuplicates = (array) => {
  // Write your answer here
<<<<<<< HEAD

=======
  return [...new Set(array)];
  //set is a data structure that creates a new set object which auto removes dup values
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
  // Return an array of unique values
  return [...new Set(array)]; //Set object and then spreading its unique values into a new array using the spread operator.
};

/**
 * Ignore this. It is for the tests.
 */

let greeter;
try {
  greeter = greet;
} catch (e) {
  // Normally it is bad practice to not handle the error.
  // However, I am just using try ... catch to get the unit test to work
}
export {
  addItems,
  combineArray,
  combineObject,
  doubleValues,
  getIsHungryText,
  getTempOfTomorrow,
  greeter,
  highestNumber,
  onlyEvenValues,
  removeDuplicates,
  removeVowels,
};
