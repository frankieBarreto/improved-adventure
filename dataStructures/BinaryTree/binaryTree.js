class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert (val) {
        let newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if(current.value === val) return console.log(undefined);
                if (val < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(val > current.value) {
                    if (current.right === null) {
                        current.right = val;
                        
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find (node) {
        let current = this.root;
        if (current.value === node.value) return true;

        while(true) {
            if(current === null) return console.log(false);
            if( current.value > node.value)  {
                current = current.left;
                if( current.value === node.value ) {
                    return console.log(true);
                } else {
                    current = current.left;
                }
            } else if ( current.value < node.value ) {
                current = current.right;
                if( current.value === node.value ) {
                    return console.log(true);
                } else {
                    current = current.right;
                }
            }
        }
    }

    bfs () {
        let rootNode = this.root;
        let data = [];
        let queue = [rootNode];
        while(queue.length) {
            rootNode = queue.shift();
            data.push(rootNode);
            if (rootNode.left) {
                queue.push(rootNode.left);
            }
            if (rootNode.right) {
                queue.push(rootNode.right)
            }
        }
        return data;
    }

    // pre-order
    dfsPreOrder () {
        let currentNode = this.root;
        let data = [];

        const traverse = (node) => {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(currentNode);
        return data;
        
    }
    
    //post-order
    dfsPostOrder () {
        let currentNode = this.root;
        let data = [];

        const traverse = (node) => {
            if ( node.left ) traverse(node.left);
            if ( node. right ) traverse(node.right);
            data.push(node.value);
        }
        traverse(currentNode)
        return data;
    }

    //In-order
    dfsInOrder () {
        let currentNode = this.root;
        let data = [];

        const traverse = (node) => {
            if(node.left) traverse(node.left)
            data.push(node.value);
            if(node.right) traverse(node.right)
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(9);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.insert(13);
let searchNode = new Node(2)
tree.find(searchNode);
console.log(tree);
// console.log("bfs:", tree.bfs())

console.log("dfsPre: ", tree.dfsPreOrder())
console.log("dfsPost: ", tree.dfsPostOrder())
console.log("dfsInOrder: ", tree.dfsInOrder())