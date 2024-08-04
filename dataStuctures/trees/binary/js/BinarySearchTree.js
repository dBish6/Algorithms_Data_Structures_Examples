const Queue = require("../../../queues/js/Queue");

/**
 * @typedef {Object} node
 * @property {number} val - The value of the node.
 * @property {node | null} left - Reference to the next left node.
 * @property {node | null} right - Reference to the next right node.
 */

/**
 * Represents a node in a binary search tree (like a link list node).
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

  /**
   * Checks if a node with the given value exists in the tree.
   *
   * O(log n) Time
   * @param {number} val The value to check.
   * @returns {boolean}
   */
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
    const queue = new Queue(),
      result = [];

    if (this.root) queue.enqueue(this.root);

    while (queue.length) {
      const node = queue.dequeue();
      result.push(node.val);

      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }

    return result;
  }

  /**
   * Performs pre-order traversal on the tree - depth first search.
   *
   * In a pre-order traversal, the root node is visited first then from the left subtree to the
   * right subtree of the tree down.
   *
   * O(n) Time
   * @param {node} start The starting node for traversal. Defaults to the root.
   * @returns {Array<node>}
   */
  preOrderTraversal(start = this.root) {
    const result = [];

    const traverse = (node) => {
      result.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    if (start) traverse(start);

    return result;
  }

  /**
   * Performs post-order traversal on the tree - depth first search.
   *
   * Post-order traversal visits the entire left subtree first and travels up from the bottom, then
   * visits the right the same way. Root node is visited last.
   *
   * O(n) Time
   * @param {node} start The starting node for traversal. Defaults to the root.
   * @returns {Array<node>}
   */
  postOrderTraversal(start = this.root) {
    const result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      result.push(node.val);
    };
    if (start) traverse(start);

    return result;
  }

  /**
   * Performs post-order traversal on the tree - depth first search.
   *
   * In-order traversal visits down the left subtree first, the root node next, and then visits down
   * the right subtree.
   *
   * O(n) Time
   * @param {node} start The starting node for traversal. Defaults to the root.
   * @returns {Array<node>}
   */
  inOrderTraversal(start = this.root) {
    const result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    };
    if (start) traverse(start);

    return result;
  }

  /**
   * Prints the tree in a format that resembles a 'tree structure'.
   * 
   * O(n) Time
   */
  printTree() {
    if (!this.root) return;
  
    const queue = new Queue(),
      levels = [];
    let maxLevel = 0;
  
    queue.enqueue({ node: this.root, level: 0 });
  
    while (queue.length > 0) {
      const { node, level } = queue.dequeue();
  
      if (!levels[level]) levels[level] = [];
  
      levels[level].push(node ? node.val : null);
  
      if (node) {
        if (node.left || node.right) {
          queue.enqueue({ node: node.left, level: level + 1 });
          queue.enqueue({ node: node.right, level: level + 1 });
        }
        maxLevel = Math.max(maxLevel, level + 1);
      }
    }
  
    const printLevel = (level, offset) => {
      if (level >= levels.length) return;
  
      const nodes = levels[level],
        spacesBetweenNodes = " ".repeat(offset);
      
      const line = nodes
        .map((node, index) => {
          if (node === null) {
            return " ".repeat(offset);
          } else {
            return `${node}`.padStart(offset + `${node}`.length);
          }
        })
        .join(spacesBetweenNodes);
  
      console.log(line);
      printLevel(level + 1, offset / 2);
    };
  
    printLevel(0, Math.pow(2, maxLevel) - 1);
  }
}

module.exports = BinarySearchTree;
