const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.arr = [];
  }

  root() {
    if (this.arr.length !== 0) {
      this.data = this.arr[0];
      return this;
    } else return null;
  }

  add(data) {
    this.arr.push(data);
  }

  has(data) {
    return this.arr.includes(data);
  }

  find(data) {
    if (this.arr.includes(data)) {
      this.data = data;
      return this;
    }
    return null;
  }

  remove(data) {
    let a = this.arr.indexOf(data);
    if (a !== -1) {
      this.arr.splice(a, 1);
    }
  }

  min() {
    if (this.arr.length !== 0) {
      let arr1 = this.arr.slice(0);
      return arr1.sort((a, b) => a - b)[0];
    }
    return null;
  }

  max() {
    if (this.arr.length !== 0) {
      let arr1 = this.arr.slice(0);
      return arr1.sort((a, b) => b - a)[0];
    }
    return null;
  }
}

module.exports = {
  BinarySearchTree,
};
