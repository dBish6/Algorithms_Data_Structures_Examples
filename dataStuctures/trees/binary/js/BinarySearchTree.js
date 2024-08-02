const Queue = require("../../../queues/js/Queue");

/**
 * @typedef {Object} node
 * @property {number} val - The value of the node.
 * @property {node | null} left - Reference to the next left node.
 * @property {node | null} right - Reference to the next right node.
 */

/**
 * Represents a node in a singly linked list.
 *
 * @implements {node}
 */
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Adds a new node.
   *
   * O(log n) Time
   * @param val
   * @returns {node}
   */
  insert(val) {
    const handleNode = (node, val) => {
      if (!node) return new Node(val);

      if (val < node.val) {
        node.left = handleNode(node.left, val);
      } else {
        node.right = handleNode(node.right, val);
      }

      return node;
    };

    this.root = handleNode(this.root, val);
  }

  /**
   * Finds a node by the given value.
   *
   * O(log n) Time
   * @param {number} val The value to find.
   * @returns {node | undefined}
   */
  find(val) {
    const handleNode = (node, val) => {
      if (!node || node.val === val) return node;

      if (val < node.val) {
        return handleNode(node.left, val);
      } else {
        return handleNode(node.right, val);
      }
    };

    return handleNode(this.root, val) || undefined;
  }

  contains(val) {
    const handleNode = (node, val) => {
      if (!node) return false;
      if (node.val === val) return true;

      if (val < node.val) {
        return handleNode(node.left, val);
      } else {
        return handleNode(node.right, val);
      }
    };

    return handleNode(this.root, val);
  }

  /**
   * Performs a breadth-first search (BFS) traversal on the tree.
   *
   * O(n) Time
   * @returns {Array<number>} An array of node values in the order they were visited.
   */
  breathFirstSearch() {
    const order = { queue: new Queue(), result: [] };

    if (this.root) order.queue.enqueue(this.root);

    while (order.queue.length) {
      const node = order.queue.dequeue();
      order.result.push(node.val);

      if (node.left) order.queue.enqueue(node.left);
      if (node.right) order.queue.enqueue(node.right);
    }

    return order.result;
  }

  /**
   * Performs pre-order traversal on the tree.
   * 
   * In a pre-order traversal, the nodes are visited from the left side then to the right side of the tree.
   *
   * O(n) Time
   * 
   * @param {node} start The starting node for traversal. Defaults to the root.
   * @returns {Array<node>}
   */
  PreOrderTraversal(start = this.root) {
    let result = [],
      current = start;

    const traverse = (node) => {
      result.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    if (current) traverse(current);

    return result;
  }
}

module.exports = BinarySearchTree;
