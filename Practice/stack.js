class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }
  pop() {
    if (this.isEmpty()) return 'The stack is empty';
    this.stack.pop;
  }
  peek() {
    if (this.isEmpty()) return 'The stack is empty';
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  printStack() {
    if (this.isEmpty()) return 'The stack is empty';
    for (let i = 0; i < this.stack.length; i++) {
      console.log(this.stack[i]);
    }
  }
}

const stack = new Stack();
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
// stack.printStack();

////////////////////////////////////////
//Revers a string ---> eg: 'the sky is blue' ---> blue is the sky'

function reverseString(string) {
  const stack = [];
  string.split(' ').forEach(word => word.length && stack.push(word));
  let final = '';
  while (stack.length) {
    final += stack.pop() + ' ';
  }
  return final;
}

// console.log(reverseString('the sky is blue'));

///////////////////////////////////////////////
/// Valid parenthisis
const isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (!stack.length) {
      return false;
    } else {
      const top = stack.pop();
      if (
        (char == ')' && top !== '(') ||
        (char == '}' && top !== '{') ||
        (char == ']' && top !== '[')
      )
        return false;
    }
  }
  return stack.length == 0;
};

//////////////////////////////////////////////////////////////////////
////IMPLEMENT STACK USING QUEUES

function stackUsingQueue() {
  function stack() {
    this.q1 = [];
    this.q2 = [];
  }

  stack.prototype.push = function (x) {
    while (this.q1.length !== 0) {
      this.q2.push(this.q1.shift());
    }
    this.q1.push(x);
    while (this.q2.length !== 0) {
      this.q1.push(this.q2.shift());
    }
  };
  stack.prototype.top = function () {
    if (this.q1.length == 0) return false;
    return this.q1.length[0];
  };
}

/////////////////////////////////////////////////////////////////
///delete a middle element of the stack
function deleteMiddle() {
  const stack = [1, 2, 3, 4, 5, 7, 8, 9, 2];
  const stack2 = [];
  let mid = Math.floor(stack.length / 2);

  while (mid >= 0) {
    const top = stack.pop();
    if (mid > 0) stack2.push(top);
    mid--;
  }
  while (stack2.length !== 0) {
    stack.push(stack2.pop());
  }
  console.log(stack);
}
deleteMiddle();
