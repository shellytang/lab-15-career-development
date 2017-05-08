'use strict';

function Node(val, next, prev) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

module.exports = Node;
