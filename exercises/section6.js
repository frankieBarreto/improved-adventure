// const sameFrequency = (num1, num2) => {
// let numStr1 = num1.toString();
// let numStr2 = num2.toString();

// if (numStr1.length !== numStr2.length) return false;

// let counter1 = {};
// let counter2 = {};

// for (let i = 0; i < numStr1.length; i++) {
//   let el1 = numStr1[i];
//   let el2 = numStr2[i];
//   counter1[el1] = (counter1[el1] || 0) + 1;
//   counter2[el2] = (counter2[el2] || 0) + 1;
// }

// for (key in counter1) {
//   if (counter1[key] !== counter2[key]) {
//     return false;
//   }
// }
// return true;
// };

//   console.log(sameFrequency(182, 281)) //true
//   console.log(sameFrequency(32, 14)) //false
//   console.log(sameFrequency(3589578, 5879385)) //true
//   console.log(sameFrequency(22, 222)) //false

// FREQUENCY COUNTER SECTION
//   const areThereDuplicates = (...args) => {
//       let i = 0;
//       let j = 1;
//       let arr = [...args];
//       let obj = {};

//       for (let el of arr) {
//           obj[el] = (obj[el] || 0) + 1;
//           if (obj[el] > 1) {
//               return true;
//           }
//       }

//       return false;
//   }

// MULTIPLE POINTERS SECTION
//   function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
//   }

// const areThereDuplicates = (...args) => {
//   return new Set(args).size !== args.length;
// };

//   console.log(areThereDuplicates(1,2,3));
//   console.log(areThereDuplicates(1,2,2));
//   console.log(areThereDuplicates('a','b','c','a'));

// const averagePair = (...args) => {
//   let arr = args[0];
//   let target = args[1];

//   if (arr.length <= 1) return false;

//   let i = 0;
//   let j = arr.length - 1;

//   while (i < j) {
//     let avg = (arr[i] + arr[j]) / 2;
//     if (avg === target) {
//       return true;
//     } else if (avg < target) {
//       i++;
//     } else {
//       j--;
//     }
//   }

//   return false;
// };

// console.log(averagePair([1,2,3], 2.5)); // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
// console.log(averagePair([],4)); // false

// const isSubsequence = (...args) => {
//   let sub = args[0];
//   let str = args[1];

//   let j = 0;
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     let subChar = sub[j];

//     if (subChar === char) {
//         j++;
//     }
//     if (sub.length === j) {
//         return true;
//     }
// }

//   return false;
// };

// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence("sing", "string"));
// console.log(isSubsequence('abc', 'abracadabra'));
// console.log(isSubsequence('abc', 'acb'));

//SLIDING WINDOW SECTION
// const maxSubarraySum = (arr, n) => {
//   if (n > arr.length) return null;
//   let maxSum = 0;
//   let tempSum = 0;

//   for (let i = 0; i < n; i++) {
//     let num = arr[i];
//     maxSum += num;
//   }

//   tempSum = maxSum;
//   for (let i = n; i < arr.length; i++) {
//     let num = arr[i];
//     tempSum = tempSum - arr[i - n] + num;
//     maxSum = Math.max(maxSum, tempSum);
//   }

//   return maxSum;
// }

// console.log(maxSubarraySum([100,200,300,400], 2)); // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4-2,1], 2)); // 5
// console.log(maxSubarraySum([2,3], 3)); // null

// DIVIDE AND CONQUER SECTION BINARY SEARCH

const Bsearch = (arr, val) => {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] === val) return [`index: ${mid}`, `value: ${arr[mid]}`];
    if (arr[mid] < val) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return -1;
};

console.log(Bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 11));

// const minSubarrayLen = (arr, sum) => {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < arr.length) {
//     if ( total < sum && end < arr.length) {
//       total += arr[end];
//       end++;
//     } else if  (total >= sum) {
//       minLen = Math.min(minLen, end-start);
//       total -= arr[start];
//       start++;
//     } else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }

// console.log(minSubarrayLen([2,3,1,2,4,3], 7))

// const findLongestSubstring = (str) => {
//   if ( str.length === 0) return 0;
//   let obj = {};
//   let count = 0;
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (obj[char]) {
//       start = Math.max(start, obj[char]);
//     }
// //          index - beginning of substring + 1 (to include current in count)
//     count = Math.max(count, i - start + 1);
// //          store the index of the next char so as to not double count
//     obj[char] = i + 1;
//   }

//   return count
// }
