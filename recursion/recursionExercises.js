// return the power of the base to the exponent recursively

const power = (base, expo) => {
    if (expo === 0) return 1;
    return base * power(base, expo-1);
}

// console.log(power(3, 2));

const factorial = (n) => {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n-1);
}

// console.log(factorial(3));


const productOfArray = (arr) => {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60


const recursiveRange = (n) => {
    if ( n === 0 ) return 0;
    return n + recursiveRange(n-1)
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55 


function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// reverse a string using recursion
const reverse = (str) => {
    if(str.length === 1) return str;
    return reverse(str.slice(1)) + str[0];
}
  
//   console.log(reverse('awesome')) // 'emosewa'
//   console.log(reverse('rithmschool')) // 'loohcsmhtir'


  // check if str is a palindrome
const isPalindrome = (str) => {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str[str.length-1]) return isPalindrome(str.slice(1,-1))
    return false;
}

// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('foobar')); // false
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false


// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
const isOdd = (n) => {
    return n % 2 !== 0
}

const someRecursive = (arr, cb) => {
    if(arr.length === 1) return cb(arr[0]);
    if(cb(arr[0])) return true
    return someRecursive(arr.slice(1), cb);
}

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd))// false
// console.log(someRecursive([4,6,8], val => val > 10)); // false


const flatten = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }

    return result
  }
  
//   console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
//   console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
//   console.log(flatten([[1],[2],[3]])) // [1,2,3]
//   console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

const capitalizeFirst = (arr) => {
    let result = []
    if(arr.length === 0) return result;
    result.push(arr[0][0].toUpperCase() + arr[0].slice(1))
    result = result.concat(capitalizeFirst(arr.slice(1)));
    return result;
}
// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


// Write a recursive function. return the sum of all numbers in the nested obj
const nestedEvenSum = (obj) => {
    let sum = 0;
    for (let key in obj) {
        if(typeof obj[key] === 'number') {
            if(obj[key] % 2 === 0) sum += obj[key];
        } else if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key])
        }
    }

    return sum;
}
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10


 const capitalizedWords  = (arr) => {
     let result = [];
     if(arr.length === 0) return result;
     result.push(arr[0].toUpperCase());
     result = result.concat(capitalizedWords(arr.slice(1)));
     return result
}
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']