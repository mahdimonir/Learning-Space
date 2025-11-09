//TODO: Implement Stack using Linked List

//! Not implemented

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {}

  push(value) {}

  pop() {}

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    const array = [];
    let currentNode = this.first;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("Front -> " + array.join(" -> ") + " -> Back");
  }
}
