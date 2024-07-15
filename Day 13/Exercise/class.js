export class Queue {
  #cache = [];
  constructor() {
    this.#cache = [];
  }

  add(val) {
    this.#cache.push(val);
  }

  show() {
    return this.#cache;
  }

  run() {
    // this.#cache.forEach((x) => {
    //   let time = Math.floor(Math.random() * 10 * 1000);
    //   setTimeout(() => console.log(`${x} waktu  ${time / 1000} detik`), time);
    // });
    // let i=0;
    // while(i < this.#cache.length){
    //     let time = Math.floor(Math.random() * 10 * 1000);
    //     await new Promise((resolve, reject) => {
    //         resolve([x,time])
    //     }).then(res => setTimeout
    // }
  }
}

// module.exports = { Queue };
