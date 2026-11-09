const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    function placeNode(currentNode, data) {
      if (currentNode === null) {
        return new Node(data);
      } else {
        if (data === currentNode.data) {
          return currentNode;
        }
        if (data > currentNode.data) {
          currentNode.right = placeNode(currentNode.right, data);
        } else {
          currentNode.left = placeNode(currentNode.left, data);
        }
      }
      return currentNode;
    }
    this.rootNode = placeNode(this.rootNode, data);
  }

  find(data) {
    function searchNode(currentNode, data) {
      if (currentNode === null) {
        return null;
      } else {
        if (data === currentNode.data) {
          return currentNode;
        }
        if (data > currentNode.data) {
          return searchNode(currentNode.right, data);
        } else {
          return searchNode(currentNode.left, data);
        }
      }
    }
    return searchNode(this.rootNode, data);
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};