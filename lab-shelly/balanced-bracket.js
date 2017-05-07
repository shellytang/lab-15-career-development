'use strict';

const Stack = require('./lib/stack');

let braceStack = new Stack;
let parenStack = new Stack;
let squiggleStack = new Stack;

let testStr = '[[{()}]][';

function findOpeners(string) {
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

function removeOpeners(string) {
  for(let i = 0; i < string.length; i ++) {
    if(string.charAt(i) === ']') {
      try {
        braceStack.pop();
      } catch(err) {
        throw new Error('missing opening brace');
      }

    }
    if(string.charAt(i) === ')') {
      try {
        parenStack.pop();
      } catch(err) {
        throw new Error('missing opening parens');
      }
    }
    if(string.charAt(i) === '}') {
      try {
        squiggleStack.pop();
      } catch(err) {
        throw new Error('missing opening squiggle');
      }
    }
  }
  if(braceStack.peek() !== null) {
    throw new Error('missing closing brace');
  }
  if(parenStack.peek() !== null) {
    throw new Error('missing closing parens');
  }
  if(squiggleStack.peek() !== null) {
    throw new Error('missing closing squiggle');
  }
}

findOpeners(testStr);
removeOpeners(testStr);
//
// function findBracket(string) {
//
//   for(let i = 0; i < string.length; i++) {
//
//     if(string.charAt(i) === '[') {
//       myStack.push(string[i]);
//       //if nothing in the stack, then head = null;
//     }
//     if(string.charAt(i) === ']') {
//
//       try {
//
//         myStack.pop();
//
//       } catch(err) {
//
//         console.log('missing opening');
//         return err;
//       }
//       //deal with empty stack?
//       // console.log('whats in the stack: ', myStack);
//       // myStack.pop();
//     }
//     // return myStack;
//   }
//   // if(myStack.head === null) console.log('SUCCESSSS!!!');
//   // if(myStack.head !== null) console.log('LINT ISSUE');
//   console.log('wahts in the stack still: ', myStack);
//   console.log('what is the head????', myStack.head);
// }
//
// findBracket(bracketStr);
