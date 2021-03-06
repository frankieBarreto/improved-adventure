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
    let node = new Node(val);
    if (!this.head) {
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
    if (!this.head || !this.tail) return undefined;
    let popped = this.tail;
    if (this.length === 1) {
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
    if (!this.head || !this.tail) return undefined;
    let shifted = this.head;
    if (this.length === 1) return this.pop();
    this.head = shifted.next;
    this.head.prev = null;
    this.length--;
    shifted.next = null;
    return shifted;
  }

  unshift(val) {
    if (!this.head) return this.push(val);
    let node = new Node(val);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  get(idx) {
    if (this.length <= idx || this.length === 0) return null;
    let midPoint = Math.floor(this.length / 2);
    let i, current;
    if (idx <= midPoint) {
      i = 0, current = this.head;
      while (i !== idx) {
        current = current.next;
        i++;
      }
    } else {
      i = this.length-1, current = this.tail;
      while (i !== idx) {
        current = current.prev;
        i--;
      }
    }
    return current;
  }

  set(idx, val) {
    let found = this.get(idx);
    if (found) {
      found.value = val;
      return true;
    }

    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) !!this.unshift(val);
    if (idx === this.length) !!this.push(val);

    let node = new Node(val);
    let foundPrev = this.get(idx - 1),
      temp = foundPrev.next;
    if (foundPrev) {
      foundPrev.next = node;
      node.next = temp;
      this.length++;
      return true;
    }

    return false;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) !!this.shift();
    if (idx === this.length - 1) !!this.pop();

    let found = this.get(idx);
    found.prev.next = found.next, found.next.prev = found.prev;
    found.next = null, found.prev = null;
    this.length--;
    return found;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    
    let next, prev = null;
    for (let i = 0; i < this.length; i++) {
    
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
    }
    
    return this;
}

}

const list = new DoublyLinkedList();
list.push(5).push(10).push(15).push(20);
console.log('get->', list.get(3))
// console.log(`---------------------------------------`)
// console.log('SET->', list.set(3, "SETHERE"))
// console.log(`---------------------------------------`)
// console.log('INSERT->', list.insert(0, 'INSERTED HERE'), list)
// console.log(`---------------------------------------`);
// // console.log(list.remove(1));
// // console.log(`---------------------------------------`);
// console.log(list);
// console.log(`---------------------------------------`);
// console.log(list.reverse());
