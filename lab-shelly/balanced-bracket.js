'use strict';

const Stack = require('./stack');

let myStack = new Stack; //
let bracketStr = '{}';

function findBracket(string) {

  for(let i =0; i < string.length; i++) {

    if(string.charAt(i) === '{') {
      console.log(i);
      myStack.push(i);
      //do a push to the stack
    }
    if(string.charAt(i) === '}') {
      //deal with empty stack?
      //do a pop from the stack of open brackets
      myStack.pop();
    }
  }
}

findBracket(bracketStr);
