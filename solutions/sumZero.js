const sumZero = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let leftNum = nums[left];
        let rightNum = nums[right];
        let sum = leftNum + rightNum;
        if(sum === 0) return [leftNum, rightNum];
        sum > 0 ? right-- : left++;
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,2,3]))
console.log(sumZero([,-4,-2,1,2,3,4,5]))