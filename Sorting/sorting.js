// BUBBLE SORT

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

// O(N)*2
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



let arr1 = [21,2,5,4,7,8,10,-1,-4];
let arr2 = [0,1,2,3,4,5,-1,-2,-3,-4,-5,];

console.log(insertionSort(arr1))
// console.log(selectionSort(arr1));
// console.log(bubbleSort(arr2));