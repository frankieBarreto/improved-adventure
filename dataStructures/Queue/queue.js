// class Queue {
//     constructor() {
//         this.size = 0;
//         this.store = {};
//         this.enqueueCount = 0;
//         this.dequeueCount = 0;
//     }
//     enqueue(val) {
//         this.store[this.enqueueCount] = val;
//         this.enqueueCount++;
//         this.size++;
//     }

//     dequeue() {
//         let removed = this.store[this.dequeueCount];
//         delete this.store[this.dequeueCount];
//         if(this.size > 0) {
//             this.dequeueCount++;
//             this.size--;
//         }

//         return removed;
//     }

//     size() {
//         return this.size;
//     }
// }

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    enqueue(val) {
        let node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return this.size++;
    }
    
    dequeue() {
        if(!this.first) return null;
        if(this.first === this.last) {
            this.last = null;
        }
        let removed = this.first;
        this.first = this.first.next;
        this.size--;
        return removed.val;
    }
    
    len() {
        return this.size;
    }
}

let q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q);
q.dequeue();
console.log(q, q.len)
