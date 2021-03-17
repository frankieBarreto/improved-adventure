//  function addUpTo ( n ) {
//      let total = 0;

//      for ( let i = 0; i <= n; i++ ) {
//          total += i;
//      }

//      return total;
//  }

//   OR

//  const sumUpTo = ( n ) => {
//      return n * (n + 1) / 2;
//  }

//  let t1 = performance.now();
//  addUpTo(1000000000);
//  let t2 = performance.now();

//  let t3 = performance.now();
//  sumUpTo(1000000000);
//  let t4 = performance.now();

//  console.log(`Call to addUpTo took ${t1 - t2} milliseconds.`);
//  console.log(`Call to sumUpto took ${t3 - t4} milliseconds.`);

// /* performance is chrome window method run it in chrome console*/

//  let obj = {name:'frankie', hobby:'gaming'}
//  console.log(Object.entries(obj))

//  Object.entries(object_input) returns an array of tuple containing its values and keys like a tuple

//  PROBLEM SOLVING

//  1. DEVISE  a plan to solving problems
//  2. MASTER  common problem solving patters

//  * Understand the problem
//  * Explore Concrete Examples
//  * Break It Down
//  * Solve/Simplify
// * Look Back and Refactor

// UNDERSTAND THE PROBLEM

// 1. Can i restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution or problem?
// 4. Can the outputs be determined from the inputs? (In other words, do I have enough information to solve the problem? [ You may not be able to but its ok ]
// 5. How should I label the important pieces of data that are a part of the problem?
//     * Can you check the result?
//     * Can you derive the result differently?
//     * Can you understand at a glance?
//     * Can you use the result or method for some other problem?
//     * Can you improve the performance of your solution?
//     * How have other people solved this problem?

// let char = "21"
// /[a-z0-9]/.test() this test to see if the str is a number or character
// console.log(/[a-z0-9]/.test(char));

// Frequency Counters Pattern:

const frequencyOfSqr = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

// console.log(frequencyOfSqr([1,2,3], [1,4,9]))

// const validAnagram = (word1, word2) => {
//     if (word1.length !== word2.length) return false;

//     let obj1 = {};
//     let obj2 = {};

//     for ( char of word1 ) {
//         obj1[char] = (obj1[char] || 0) + 1;
//     }

//     for ( char of word2 ) {
//         obj2[char] = (obj2[char] || 0) + 1;
//     }

//     for ( let key in obj1 ) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(validAnagram("", "")); // true
// console.log(validAnagram("zza", "aaz")); // false
// console.log(validAnagram("nagaram", "anagram")); /// true
// console.log(validAnagram("rat", "car")); // false
// console.log(validAnagram("awesome", "awesom")); // false
// console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
// console.log(validAnagram("qwerty", "qeywrt")); // true
// console.log(validAnagram("texttwisttime", "timetwisttext")); // true

// Multiple Pointers Pattern:

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    let comparator = arr[j];
    let subject = arr[i];

    if (comparator !== subject) {
        console.log("subject: ", subject, "comparator: ", comparator);
      i++;
      arr[i] = arr[j];
    }

    j++;
  }

  return i + 1;
};

// console.log(countUniqueValues([1,1,1,1,1,2])) // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
