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
      if (!node) {
        return new Node(val);
      }

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
      if (!node || node.val === val) {
        return node;
      }

      if (val < node.val) {
        return handleNode(node.left, val);
      } else {
        return handleNode(node.right, val);
      }
    };

    return handleNode(this.root, val) || undefined;
  }
}
