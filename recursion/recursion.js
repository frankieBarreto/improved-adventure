const countDown = (n) => {
    if(n === 0) return console.log(`Blast Off!`);
    console.log(n)
    countDown(n-1)
}

// countDown(10);

const sumRange = (n) => {
    if(n === 1) return 1;
    return sumRange(n-1) + n;
}

// console.log(sumRange(6));



const recursiveFactorial = (n) => {
    if(n === 1) return 1;
    return n * recursiveFactorial(n-1);
}

// console.log(recursiveFactorial(5))

const collectOddValues = (arr) => {
    let result = [];

    function recursiveHelper (input) {
        if (input.length === 0) return;
        if(input[0] % 2 !== 0) result.push(input[0])
        recursiveHelper(input.slice(1))
    }

    recursiveHelper(arr)
    return result;
}

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));