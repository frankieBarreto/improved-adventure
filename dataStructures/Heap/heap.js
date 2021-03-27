//(n-2)/2
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let el = this.values[index];

    // while (index > 0) {
    //   let parentIndex = Math.floor((index - 1) / 2);
    //   let parent = this.values[parentIndex];

    //   if (el <= parent) break;

    //   this.values[parentIndex] = el;
    //   this.values[index] = parent;
    //   index = parentIndex;
    // }

    for (let i = 0; index > i; i++) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (el < parent) break;

      this.values[parentIndex] = el;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this;
  }


  bubbleDown() {
      let idx = 0;
      let len = this.values.length;
      let element = this.values[0];

      
      
      while(true) {
          let leftChildIdx = (2 * idx) + 1;
          let rightChildIdx = (2 * idx) + 2;
          let leftChild, rightChild;
          let swap = null;

          if(leftChildIdx < len) {
              leftChild = this.values[leftChildIdx];
              if(leftChild > element) {
                  swap = leftChildIdx
              }
          }

          if(rightChildIdx < len) {
              rightChild = this.values[rightChildIdx]
              if(
                (swap === null && rightChild > element) || 
                (swap !== null && rightChild > leftChild)
              ) {
                  swap = rightChildIdx;
              }
          }

          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap
      }
    }
        
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return max;
  }


}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(32);
maxHeap.insert(36);
maxHeap.insert(27);
maxHeap.insert(22);
maxHeap.insert(45);
maxHeap.insert(60);
maxHeap.insert(100);
console.log(maxHeap);
console.log(maxHeap.extractMax());
console.log(maxHeap);
