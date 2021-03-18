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

console.log(recursiveFactorial(5))