const Stack = require("../../../stacks/js/Stack");
const Queue = require("../../../queues/js/Queue");

/**
 * A `undirected graph` that uses a `adjacency list`.
 */
class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adds a new vertex to the graph.
   *
   * O(1) Time
   * @param {string} vertex The name of the vertex to be added.
   * @param {boolean} [override] Optional flag to allow overwriting an existing vertex.
   * @throws An error if the vertex already exists and `override` is not `true`.
   */
  addVertex(vertex, override) {
    if (this.adjacencyList[vertex] && !override)
      throw new Error(
        `Vertex "${vertex}" already exists. To overwrite, set the 'override' parameter to true.`
      );

    this.adjacencyList[vertex] = [];
  }

  /**
   * Adds an undirected edge between two vertices in the graph.
   *
   * O(1) Time
   * @param {string} vertex1 Vertex name 1.
   * @param {string} vertex2 Vertex name 2.
   * @throws An error if one of the vertexes doesn't exist in the graph.
   */
  addEdge(vertex1, vertex2) {
    [this.adjacencyList[vertex1], this.adjacencyList[vertex2]].forEach((edges, i) => {
      if (!edges) throw new Error("One or both vertices doesn't exist in the graph.");

      edges.push(i === 0 ? vertex2 : vertex1);
    });
  }

  /**
   * Removes a vertex and all edges connected to it from the graph.
   *
   * O(n) Time
   * @param {string} vertex Name of the vertex to be removed.
   * @throws An error if the vertex doesn't exist in the graph.
   */
  removeVertex(vertex) {
    for (const neighbor of this.adjacencyList[vertex]) this.removeEdge(vertex, neighbor);
    delete this.adjacencyList[vertex];
  }

  /**
   * Removes an undirected edge between two vertices in the graph.
   *
   * O(n) Time
   * @param {string} vertex1 Vertex name 1.
   * @param {string} vertex2 Vertex name 2.
   * @throws An error if one of the vertices doesn't exist in the graph.
   */
  removeEdge(vertex1, vertex2) {
    [vertex1, vertex2].forEach((vert, i) => {
      if (!this.adjacencyList[vert]) throw new Error("One or both vertices doesn't exist in the graph.");

      this.adjacencyList[vert] = this.adjacencyList[vert].filter(
        (neighbor) => neighbor !== (i === 0 ? vertex2 : vertex1)
      );
    });
  }

  /**
   * Performs a depth-first search (BFS) traversal on the graph recursively.
   *
   * O(n) Time
   * @param {string} start Starting vertex for traversal.
   * @returns {Array<number>} An array of values in the order they were visited.
   */
  depthFirstSearchRecursive(start) {
    const visited = new Set(),
      result = [];

    const traverse = (vertex) => {
      if (!vertex) return;

      visited.add(vertex);
      result.push(vertex);
      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) traverse(neighbor);
      }

      return result;
    };

    return traverse(start);
  }

  /**
   * Performs a depth-first search (BFS) traversal on the graph.
   *
   * O(n) Time
   * @returns {Array<number>} An array of values in the order they were visited.
   */
  depthFirstSearchIterative(start) {
    const stack = new Stack(),
      visited = new Set([start]),
      result = [];

    stack.push(start);
    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
          visited.add(neighbor);
        }
      }
    }

    return result;
  }

  /**
   * Performs a breath-first search (BFS) traversal on the graph.
   *
   * O(n) Time
   * @returns {Array<number>} An array of values in the order they were visited.
   */
  breathFirstSearch(start) {
    const queue = new Queue(),
      visited = new Set([start]),
      result = [];

    queue.enqueue(start);
    while (queue.length) {
      const vertex = queue.dequeue();
      result.push(vertex);

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          queue.enqueue(neighbor);
          visited.add(neighbor);
        }
      }
    }

    return result;
  }
}

module.exports = UndirectedGraph;
