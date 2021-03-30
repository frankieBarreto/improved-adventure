class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addVertexEdge(vertex1, vertex2, weight) {
        let listObj = this.adjacencyList;
        listObj[vertex1].push({node: vertex2, weight});
        listObj[vertex2].push({node: vertex1, weight});
        return listObj;
    }
}

let graph = new WeightedGraph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
console.log(graph);
// graph.addVertex()