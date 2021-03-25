class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val)
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head || !this.tail) return undefined;
        let popped = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
        return popped;
    }
    
    shift() {
        if(!this.head || !this.tail) return undefined;
        let shifted = this.head;
        if(this.length === 1) return this.pop();
        this.head = shifted.next
        this.head.prev = null
        this.length--;
        shifted.next = null;
        return shifted;
    }

    unshift() {

    }

    get() {

    }

    set() {

    }

    insert() {

    }

    remove() {

    }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);

console.log(list)
console.log(`---------------------------------------`)
console.log(list.shift());
console.log(`---------------------------------------`)
console.log(list)