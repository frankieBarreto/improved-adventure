// Linear search
/*
indexOf
includes
find
findIndex
*/

const linearSearch = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    
    return -1;
}
//Binary search only works if arr is sorted
// const linearSearchBigO = (arr, val) => {
//     let left = 0, right = arr.length-1;
//     let mid = Math.floor(arr.length-1 / 2);
//     while(left <= right) {
//         if(val === arr[mid]) return mid;

//         if(val < arr[mid]) {
//             right = mid - 1;
//             mid = Math.floor((left + right)/2);
//         } else if(val > arr[mid]){
//             mid = Math.floor((left + right)/2);
//             left = mid + 1;
//         }
//     }

//     return -1;
// }

const binarySearch = (arr, el) => {
    let start = 0, end = arr.length-1;
    let mid = Math.floor((start + end) / 2);

    while (arr[mid] !== el && start <= end) {
        if(arr[mid] > el) end = mid - 1;
        else start = mid + 1;
        mid = Math.floor((start + end) / 2);
    }

    return arr[mid] === el ? mid : -1
}


console.log(binarySearch([1,2,3,4,5], 1));
console.log(binarySearch([1,2,3,4,5], 2));
console.log(binarySearch([1,2,3,4,5], 3));
console.log(binarySearch([1,2,3,4,5], 5));
console.log(binarySearch([1,2,3,4,5], 6));