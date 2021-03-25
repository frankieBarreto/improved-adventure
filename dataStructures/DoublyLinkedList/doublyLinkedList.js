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
            this.length++;
        } else {
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
        return this;
    }

    pop() {
    
    }

    shift() {

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