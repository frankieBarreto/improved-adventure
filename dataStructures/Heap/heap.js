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

  
  
  extractMax() {

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
