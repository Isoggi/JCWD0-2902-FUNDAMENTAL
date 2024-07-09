/** @format */

class Queue {
  private containter: number[] = [];

  enqueue(element: number) {
    this.containter.push(element);
  }
  get elements() {
    return this.containter;
  }
  dequeue() {
    this.containter.shift();
  }
}

const queue = new Queue();
console.log(queue.elements);
queue.enqueue(12); //pertama
queue.enqueue(15); //kedua
queue.enqueue(16);
console.log(queue.elements);
queue.dequeue();
console.log(queue.elements); //12 hilang karena berada diurutan pertama
