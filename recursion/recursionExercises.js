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