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
//   console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3