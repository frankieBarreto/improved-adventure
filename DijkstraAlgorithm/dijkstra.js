class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority})
        this.sort();
    };

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b)=> a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addVertexEdge(vertex1, vertex2, weight) {
        let listObj = this.adjacencyList;
        listObj[vertex1].push({node: vertex2, weight});
        listObj[vertex2].push({node: vertex1, weight});
        return listObj;
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = []; // return this path as the result
        let smallest;
        // build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }

            previous[vertex] = null;
        }

        //as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;

                    if (candidate < distances[nextNeighbor]) {
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        let result = path.concat(smallest).reverse();
        console.log(result);
    }
}

let graph = new WeightedGraph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addVertexEdge("A", "B", 4)
graph.addVertexEdge("A", "C", 2)
graph.addVertexEdge("B", "E", 3)
graph.addVertexEdge("C", "D", 2)
graph.addVertexEdge("C", "F", 4)
graph.addVertexEdge("D", "E", 3)
graph.addVertexEdge("D", "F", 1)
graph.addVertexEdge("E", "F", 1)

console.log(graph);
graph.Dijkstra("A", "E");