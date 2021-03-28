// undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addVertexEdge(vertex1, vertex2) {
        let listObj = this.adjacencyList;
        listObj[vertex1].push(vertex2);
        listObj[vertex2].push(vertex1);
        return listObj;
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }

    removeVertex(v) {
        for (let key in this.adjacencyList) {
            this.removeEdge(v, key);
        }

        delete this.adjacencyList[v];
    }

    dfsRecursive (start) {
        let result = [];
        let visited = {};

        let adjacencyList = this.adjacencyList;
        const dfs = (vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }

        dfs(start)
        return result;
    }
}

let graph = new Graph();
// graph.addVertex("Tokyo");
// graph.addVertex("Dallas");
// graph.addVertex("Aspen");
// graph.addVertexEdge("Dallas", "Tokyo");
// graph.addVertexEdge("Dallas", "Aspen");
// console.log(graph);
// // graph.removeEdge("Dallas", "Aspen");
// graph.removeVertex("Tokyo")
/////////////////////////// SECTION TRAVERSING VERTICES //////////////
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addVertexEdge('A', 'B')
graph.addVertexEdge('A', 'C')
graph.addVertexEdge('B', 'D')
graph.addVertexEdge('C', 'E')
graph.addVertexEdge('D', 'E')
graph.addVertexEdge('D', 'F')
graph.addVertexEdge('E', 'F')
graph.dfsRecursive("A");
console.log(graph.dfsRecursive('A'));
console.log(graph);