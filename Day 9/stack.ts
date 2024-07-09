/** @format */

class Stack {
  private maxSize: number;
  private container: number[] = [];

  constructor(max: number = 10) {
    this.maxSize = max;
  }
  push(element: number) {
    if (this.IsFull()) return console.log("stack is Overflow!");

    this.container.push(element); // memasukan element ke index terakhir
  }

  pop() {
    if (this.IsEmpty()) return console.log("stack is Underflow!");
    this.container.pop(); // menghapus element di index terakhir
  }
  get elements() {
    return this.container;
  }
  private IsFull() {
    return this.container.length >= this.maxSize;
  }
  private IsEmpty() {
    return this.container.length === 0;
  }
}

const stack = new Stack(10);
console.log(stack);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);
stack.push(11);
console.log(stack.elements);

stack.pop(); // 10
stack.pop(); // 9
console.log(stack.elements);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.push(11);

console.log(stack.elements);
