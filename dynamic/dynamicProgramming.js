// Big O N(2^n) really bad~!!!!
const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// console.log(fib(43))


// Memoization saves function calls making thid fib function dynamic
// BigO 0(N)
const fibBigO = (n, memo = []) => {
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    let  res = fibBigO(n-1, memo) + fibBigO(n-2, memo);
    memo[n] = res;
    return res;
}

//Bottom-Up fib_table

const fibTable = (n) => {
    if(n <= 2) return 1;
    let fibs = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibs[i] = fibs[i-1] + fibs[i - 2];
    }

    return fibs[n]
}


console.log(fibTable(100))