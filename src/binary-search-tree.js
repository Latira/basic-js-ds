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

  find(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  has(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  BinarySearchTree
};