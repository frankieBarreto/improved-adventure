
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // O(1)
    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    //O(1) OR O(N)
    pop() {
        if(!this.head) return undefined;
        let current = this.head, newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    
    //O(1) OR O(N)
    shift() {
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        
        if(this.length === 0) this.tail = null
        return current;
    }
    
    //O(1)
    unshift(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            node.next = this.head;
            this.head = node;
            this.length++;
        }
        return this;
    }
    
    //O(N)
    get(index) {
        if(index < 0 || index > this.length) return null;
        let i = 0, node = this.head;
        while(i < index) {
            node = node.next;
            i++;
        }
        
        return node;
    }
    
    //O(N) || O(1)
    set(index, val) {
        let found = this.get(index);
        if(found) {
            found.val = val;
            return true;
        }
        
        return false;
    }
    // O(1)
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) !!this.unshift(val);
        if(index === this.length) !!this.push(val);
        
        let node = new Node(val);
        let foundPrev = this.get(index-1);
        let temp = foundPrev.next;

        if(foundPrev) {
            foundPrev.next = node;
            node.next = temp
            this.length++;
            return true;
        }

        return false;
    }

    // O(1) || O(N)
    remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) !!this.shift();
        if(index === this.length) !!this.pop();

        let found = this.get(index-1);
        if(found) {
            let removed = found.next;
            found.next = removed.next;
            this.length--;
            return removed;
        }

    }
    //O(N)
    reverse() {
        // create a var called node(current) and initialize it to the head property
        let node = this.head;
        // swap the head and tail
        this.head = this.tail;
        this.tail = node;
        // create a variable called next and one called previous
        let next, prev = null;
        // iterate through the list 
        for (let i = 0; i < this.length; i++) {
            // set next to be the next property on w.e. node is 
            next = node.next;
            // set the next property on the node to be w.e. prev is
            node.next = prev;
            // set prev to be the value of a the node var
            prev = node;
            node = next;
        }
        return this;
    }
}

let links = new LinkedList();

links.push('node1')
links.push('node2');
links.push('node3');
// links.push('!');
// links.shift();
// links.unshift('node0');
// links.get(0)
// links.set(0, 'node1');
// links.insert(2, '!!!!!');
links.reverse();
console.log(links);