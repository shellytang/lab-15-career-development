'use strict';

const Stack = require('./lib/stack');
let openerStack = new Stack;

const Linter = module.exports = function(string) {

  for(let i = 0; i <string.length; i ++) {

    if(string.charAt(i) === '[' || string.charAt(i) === '{' ||  string.charAt(i) === '(') {
      openerStack.push(string[i]);
    }
    if(string.charAt(i) === ']' || string.charAt(i) === '}' || string.charAt(i) === ')') {

      if(openerStack.head === null) {
        throw new Error('Missing matching opener');
      }

      let current = string.charAt(i);
      let top = openerStack.peek();

      if(top === '[' && current === ']' || top === '{' && current === '}' || top === '(' && current === ')') {
        openerStack.pop();
      }
    }
  }
  if(openerStack.head !== null) {
    console.log('what is itttt', openerStack.head);
    throw new Error('Missing matching closer');
  }
};
