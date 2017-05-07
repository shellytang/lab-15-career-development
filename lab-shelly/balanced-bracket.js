'use strict';

const Stack = require('./lib/stack');
let braceStack = new Stack;
let parenStack = new Stack;
let squiggleStack = new Stack;

let testStr = '[][';

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

// function myLinter(string) {
//
//   for(let i = 0; i <string.length; i ++) {
//
//     if(string.charAt(i) === '[' || string.charAt(i) === '{' ||  string.charAt(i) === '(') {
//       openerStack.push(string[i]);
//
//     }
//
//     if(string.charAt(i) === ']' || string.charAt(i) === '}' || string.charAt(i) === ')') {
//
//       let stackTop = openerStack.peek();
//       let current = string.charAt(i);
//       console.log('waht is current: ', current);
//       console.log('waht is top:', stackTop);
//       // console.log(string.charAt(i));
//       // console.log('stackTop: ', stackTop);
//       // console.log('current closer: ', current);
//
//       if (stackTop === '[' && current === ']') {
//         openerStack.pop();
//         // console.log('pop : ', openerStack);
//
//         if(openerStack === null) {
//           return openerStack;
//         }
//       }
//
//       if (stackTop === '{' && current === '}') {
//         openerStack.pop();
//         console.log('inside {}');
//       }
//
//       if (stackTop === '(' && current === ')') {
//         openerStack.pop();
//         console.log('inside ()');
//       }
//
//       else {
//         throw new Error('Missing matching opener');
//       }
//       // if(openerStack === null) {
//       //   throw new Error('Missing matching opener');
//       // }
//     }
//   }
//
//   if(openerStack !== null) {
//     throw new Error('Missing matching closer');
//   }
//   return openerStack;
// }
//
// myLinter(testStr);
//

// function _findOpeners(string) {
//   for(let i = 0; i < string.length; i++) {
//     if(string.charAt(i) === '[' || string.charAt(i) === '{' ||  string.charAt(i) === '(') {
//       openerStack.push(string[i]);
//     }
//   }
// }
// _findOpeners(testStr);
//
// console.log('whats here', openerStack);
