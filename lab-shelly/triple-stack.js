'use strict';

const Stack = require('./lib/stack');
let braceStack = new Stack;
let parenStack = new Stack;
let squiggleStack = new Stack;

let testStr = '[][][]';

function removeOpeners(string) {

  _findOpeners(testStr);

  for(let i = 0; i < string.length; i ++) {

    if(string.charAt(i) === ']') {
      try {
        braceStack.pop();
      } catch(err) {
        throw new Error('missing matching opening brace');
      }
    }

    if(string.charAt(i) === ')') {
      try {
        parenStack.pop();
      } catch(err) {
        throw new Error('missing matching opening parens');
      }
    }
    if(string.charAt(i) === '}') {
      try {
        squiggleStack.pop();
      } catch(err) {
        throw new Error('missing matching opening squiggle');
      }
    }
  }
  if(braceStack.head !== null) {
    throw new Error('missing matching closing brace');
  }
  if(parenStack.head !== null) {
    throw new Error('missing matching closing parens');
  }
  if(squiggleStack.head !== null) {
    throw new Error('missing matching closing squiggle');
  }

  console.log('success!');

  function _findOpeners(string) {
    for(let i = 0; i < string.length; i++) {
      if(string.charAt(i) === '[') {
        braceStack.push(string[i]);
      }
      if(string.charAt(i) === '(') {
        parenStack.push(string[i]);
      }
      if(string.charAt(i) === '{') {
        squiggleStack.push(string[i]);
      }
    }
  }
}
removeOpeners(testStr);
