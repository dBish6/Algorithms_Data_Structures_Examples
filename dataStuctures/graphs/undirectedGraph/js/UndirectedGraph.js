const Stack = require("../../../stacks/js/Stack");
const Queue = require("../../../queues/js/Queue");
const PriorityQueue = require("../../../queues/js/PriorityQueue");

/** 
 * UndirectedGraph
 * Author: @dBish6
 */

/**
 * An `undirected graph` and `weighted or un-weighted graph` that uses a `adjacency list` to represent vertices and edges.
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
   * @throws An error if the vertex already exists when `override` is not passed as `true`.
   */
  addVertex(vertex, override) {
    if (this.adjacencyList[vertex] && !override)
      throw new Error(
        `Vertex "${vertex}" already exists. To overwrite, set the 'override' parameter to true.`
      );

    this.adjacencyList[vertex] = {};
  }

  /**
   * Adds an undirected edge between two vertices in the graph.
   *
   * O(1) Time
   * @param {string} vertex1 Vertex name 1.
   * @param {string} vertex2 Vertex name 2.
   * @param {number | null} [weight] Optional weight (value) of the edge between the two vertices; defaults to null.
   * @throws An error if one of the vertexes doesn't exist in the graph.
   */
  addEdge(vertex1, vertex2, weight) {
    if (vertex1 === vertex2) throw new Error("You can't connect the same vertex.");
    else if (this.adjacencyList[vertex1] === undefined || this.adjacencyList[vertex2] === undefined) 
      throw new Error("One or both vertices doesn't exist in the graph.");

    Array.from({ length: 2 }).forEach((_, i) => {
      this.adjacencyList[i === 0 ? vertex1 : vertex2][i === 0 ? vertex2 : vertex1] = weight !== undefined ? weight : null;
    })
  }

  // TODO: Combine the add edge vertex, remove, later.

  /**
   * Removes a vertex and all edges connected to it from the graph.
   *
   * O(1) Time
   * @param {string} vertex The name of the vertex to be removed.
   * @throws An error if the vertex doesn't exist in the graph.
   */
  removeVertex(vertex) {
    delete this.adjacencyList[vertex];
  }

  /**
   * Removes an undirected edge between two vertices in the graph.
   *
   * O(1) Time
   * @param {string} vertex1 Vertex name 1.
   * @param {string} vertex2 Vertex name 2.
   * @throws An error if one or both vertices doesn't exist in the graph.
   */
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] === undefined || this.adjacencyList[vertex2] === undefined) 
      throw new Error("One or both vertices doesn't exist in the graph.");

    Array.from({ length: 2 }).forEach((_, i) => {
      delete this.adjacencyList[i === 0 ? vertex1 : vertex2][i === 0 ? vertex2 : vertex1];
    })
  }

  /**
   * Performs a depth-first search (DFS) traversal on the graph recursively.
   *
   * O(n) Time
   * @param {string} start Starting vertex for traversal.
   * @returns {Array<string>} An array of vertex names in the order they were visited.
   */
  depthFirstSearchRecursive(start) {
    const visited = new Set(),
    result = [];

    const traverse = (vertex) => {
      if (!vertex) return;

      visited.add(vertex);
      result.push(vertex);
      for (const neighbor in this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) traverse(neighbor);
      }

      return result;
    };

    return traverse(start);
  }

  /**
   * Performs a depth-first search (DFS) traversal on the graph.
   *
   * O(n) Time
   * @param {string} start Starting vertex for traversal.
   * @returns {Array<string>} An array of vertex names in the order they were visited.
   */
  depthFirstSearchIterative(start) {
    const stack = new Stack(),
    visited = new Set([start]),
    result = [];

    stack.push(start);
    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      for (const neighbor in this.adjacencyList[vertex]) {
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
   * @param {string} start Starting vertex for traversal.
   * @returns {Array<string>} An array of vertex names in the order they were visited.
   */
  breathFirstSearch(start) {
    const queue = new Queue(),
      visited = new Set([start]),
      result = [];

    queue.enqueue(start);
    while (queue.length) {
      const vertex = queue.dequeue();
      result.push(vertex);

      for (const neighbor in this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          queue.enqueue(neighbor);
          visited.add(neighbor);
        }
      }
    }

    return result;
  }

  /**
   * Uses Dijkstra's algorithm to find the shortest path from one vertex to another.
   *
   * O(n log n) Time
   * @param {string} start The starting vertex for the path.
   * @param {string} target The target vertex for the path.
   * @returns {Array<string>} An array of vertex names; the short path to the target vertex.
   */
  findShortestPath(start, target) {
    const vertexes = new PriorityQueue(),
      distances = { [start]: { path: null, weight: 0 } },
      path = [] // to return at end.

    vertexes.enqueue(start, 0);

    let smallest;
    while (vertexes.values.length) {
      smallest = vertexes.dequeue().val;
  
      // Constructs and returns the path when at the target.
      if (smallest === target) {
        while (distances[smallest].path) {
          path.push(smallest);
          smallest = distances[smallest].path;
        }
        path.push(start)

        return path.reverse();
      }
  
      // Updates distances for neighbors.
      for (const neighbor in this.adjacencyList[smallest]) {
        const weight = this.adjacencyList[smallest][neighbor];
        if (weight === null) continue; // Ignores an edge with no weight, since we can pass nothing for the weight when adding an edge.

        const pathWeight = distances[smallest].weight + weight;
        if (!distances[neighbor] || pathWeight < distances[neighbor].weight) {
          distances[neighbor] = { path: smallest, weight: pathWeight };
          vertexes.enqueue(neighbor, pathWeight);
        }
      }
    }

    return [];
  }
}

module.exports = UndirectedGraph;
