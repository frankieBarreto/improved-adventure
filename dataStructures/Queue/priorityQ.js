//(n-2)/2
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
      this.values = [];
    }

    bubbleUp() {
      let index = this.values.length - 1;
      let el = this.values[index];
  
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
  
        if (el.priority <= parent.priority) break;
  
        this.values[parentIndex] = el;
        this.values[index] = parent;
        index = parentIndex;
      }

    }
  
    enqueue(val, priority) {
        let node = new Node(val, priority)
      this.values.push(node);
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
                if(leftChild.priority > element.priority) {
                    swap = leftChildIdx
                }
            }
  
            if(rightChildIdx < len) {
                rightChild = this.values[rightChildIdx]
                if(
                  (swap === null && rightChild.priority > element.priority) || 
                  (swap !== null && rightChild.priority > leftChild.priority)
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
          
    dequeue() {
      const max = this.values[0];
      const end = this.values.pop();
      this.values[0] = end;
      this.bubbleDown();
      return max;
    }
  
  
  }
  
  let priorityQ = new PriorityQueue();
  priorityQ.enqueue("Metal Gear Solid", 10);
  priorityQ.enqueue("Mario Bros.", 7);
  priorityQ.enqueue("Fortnite", 3);
  priorityQ.enqueue("No Man's sky", 1);
  priorityQ.enqueue("Final Fantasy VIII", 9);
  priorityQ.enqueue("Guilty Gear Strive", 8);
  console.log(priorityQ);
  priorityQ.dequeue();
  console.log(priorityQ);
  priorityQ.dequeue();
  console.log(priorityQ);
 
  