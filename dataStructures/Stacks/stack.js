// class Stack {
//     constructor() {
//         this.store = {};
//         this.size = 0;
//     }
//     push(val) {
//         this.store[this.size] = val;
//         this.size++;
//         return this.size;
//     }

//     pop() {
//         let popped = this.store[this.size - 1];
//         if(this.size > 0) {
//             delete this.store[this.size - 1];
//             this.size--;
//         }

//         return popped;
//     }
    
//     length() {
//         return this.size;
//     }
// }



class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    push(val) {
        let node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }

        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        let popped = this.first;
        if(this.first === this.last) {
            this.last = null;
        } else {
            this.first = this.first.next;
            this.size--;
        }
        return popped.val;
    }

    size() {
        return this.size;
    }
    
}
let stack = new Stack();
stack.push("hello");
stack.push("world");
stack.push("stack");

console.log(stack.pop(), stack);