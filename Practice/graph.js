class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacentList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacentList[vertex1].push(vertex2);
    this.adjacentList[vertex2].push(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacentList[vertex]) return;

    while (this.adjacentList[vertex].length) {
      const connectedVertex = this.adjacentList[vertex].pop();
      this.adjacentList[connectedVertex] = this.adjacentList[
        connectedVertex
      ].filter(v => v != vertex);
    }
    delete this.adjacentList[vertex];
  }

  BFS(start) {
    const visited = new Set();
    visited.add(start);
    const result = [];
    const queue = [start];

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      for (const n of this.adjacentList[vertex]) {
        if (!visited.has(n)) {
          visited.add(n);
          queue.push(n);
        }
      }
    }
    return result;
  }
  DFS(start) {
    const visited = new Set();
    const stack = [start];
    const result = [];

    while (stack.length) {
      const vertex = stack.pop();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        for (const n of this.adjacentList[vertex]) {
          stack.push(n);
        }
      }
    }
    return result;
  }
}

////////////////////////////////////////////////////////////////////
////////////////////DETECT CYCLE IN GRAPH

Graph.prototype.detectCycle = function () {
  const visited = new Set();
  const dfs = (current, parent) => {
    visited.add(current);

    for (const neighbor of this.adjacentList[current]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, current)) return true;
      } else if (neighbor != parent) {
        return true;
      }
    }
    return false;
  };
  dfs('A', -1);
  return false;
};
const graph = new Graph();
graph.addEdges('A', 'B');
graph.addEdges('A', 'C');
graph.addEdges('C', 'D');
graph.addEdges('D', 'E');
graph.addEdges('E', 'B');
console.log(graph.detectCycle());
