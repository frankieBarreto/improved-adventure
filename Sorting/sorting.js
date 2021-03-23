// BUBBLE SORT
// Big O Quadratic
const bubbleSort = (arr) => {
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i], next = arr[i+1];
                arr[i] = next, arr[i+1] = temp;
                sorted = false;
            }
            
        }
    }
    return arr;
}

// O(N)*2 Quadratic
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}



// Insertion Sort Quadratic
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        for (let j = i-1; j >= 0 && arr[j] > curr; j--) {
            let sortEl = arr[j];
            arr[j+1] = sortEl;
            arr[j] = curr;
        }
    }

    return arr;
}



// let arr1 = [21,2,5,4,7,8,10,-1,-4];
let arr2 = [0,1,2,3,4,5,-1,-2,-3,-4,-5,];



////////////////////////////////////////////////////// Intermediate //////////////////////////////////////////////

let data = new Array(100000).fill(0)
.map((el) =>(
    el = Math.floor(Math.random() * Math.floor(100)))
    );
    
    // console.log(data);
    
// 1948
// if(el1 < el2) {
//     result.push(el1);
//     i++
// } else {
//     result.push(el2)
//     j++;
// }
const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        let el1 = arr1[i], el2 = arr2[j];
        el1 < el2 ? result.push(el1) && i++ : result.push(el2) && j++;
    }
    
    while(i < arr1.length) {
        let el1 = arr1[i];
        result.push(el1);
        i++;
    }

    while(j < arr2.length) {
        let el2 = arr2[j];
        result.push(el2);
        j++;
    }
    return result;
}



const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}





const pivot = (arr, start = 0, end = arr.length -1) => {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    let pivot = arr[start];
    let swapIdx = start;

    // let idx = arr.indexOf(point);
    for (let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

const quickSort = (arr, left = 0, right = arr.length-1) => {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    
    return arr;
}


const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}

const digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (arr) => {
    let max = 0;
    for (let n of arr) {
        max = Math.max(max,  digitCount(n))
    }
    return max;
}


const radixSort = (arr) => {
    let maxCount = mostDigits(arr);
    for (let k = 0; k < maxCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i])
        }
        arr = [].concat(...digitBuckets);
    }

    return arr;
}

// console.log(bubbleSort(data));
// console.log(selectionSort(data));
// console.log(insertionSort(data));
// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
// console.log(mergeSort(data));
// console.log(pivot(data))
// console.log(quickSort(data));
// console.log(radixSort(data));



