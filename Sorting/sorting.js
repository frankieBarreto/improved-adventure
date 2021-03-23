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
// let arr2 = [0,1,2,3,4,5,-1,-2,-3,-4,-5,];



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

// console.log(merge([1, 10, 50], [2, 14, 99, 100]))


const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid))
    return merge(arr1, arr2) 
}
    // console.log(bubbleSort(data));
    // console.log(selectionSort(data));
    // console.log(insertionSort(data));

    console.log(mergeSort(data))



