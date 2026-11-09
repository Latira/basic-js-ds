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

  remove(data) {
    function removeNode(currentNode, data) {
      if (currentNode === null) {
        return null;
      }
      if (data < currentNode.data) {
        currentNode.left = removeNode(currentNode.left, data)
        return currentNode;
      } else if ((data > currentNode.data)) {
        currentNode.right = removeNode(currentNode.right, data)
        return currentNode;        
      } else {
        if (currentNode.left === null && currentNode.right === null) {
          return null;
        } else if (currentNode.left === null) {
          return currentNode.right;
        } else if (currentNode.right === null) {
          return currentNode.left;
        }
        let minFromRight = currentNode.right;
        while (minFromRight.left !== null) {
          minFromRight = minFromRight.left;
        }
        currentNode.data = minFromRight.data;
        currentNode.right = removeNode(currentNode.right, minFromRight.data);
        return currentNode;   
      }
    }
    this.rootNode = removeNode(this.rootNode, data);
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