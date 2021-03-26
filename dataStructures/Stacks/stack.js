class Stack {
    constructor() {
        this.store = {};
        this.size = 0;
    }
    push(val) {
        this.store[this.size] = val;
        this.size++;
        return this.size;
    }

    pop() {
        let popped = this.store[this.size - 1];
        if(this.size > 0) {
            delete this.store[this.size - 1];
            this.size--;
        }

        return popped;
    }
    
    length() {
        return this.size;
    }
}

let stack = new Stack();
console.log(stack.push("hello"));
stack.push("world");
stack.pop();
console.log(stack);