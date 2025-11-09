//? Problem Statement

//* Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.
//* An input strign is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
// "(){}[]" -> true
// "[{()}]" -> true
// "(]" -> false
// "(()" -> false

import Stack from "./Stack.mjs";

const bracketChecker = (str) => {
  const stack = new Stack();

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty() || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }
  return stack.isEmpty();
};

console.log(bracketChecker("()[]{}"));
