/** @format */
export default class {
  private static arr: string[] = [];

  static add(food: string) {
    this.arr.push(food);
  }

  static async queue() {
    let i = 1;
    while (i <= this.arr.length) {
      const sec = Math.ceil(Math.random() * 9);
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          if (i % 2) resolve(i);
          reject();
        }, sec * 1000)
      )
        .then((food) => {
          console.log("Queue", food, "Done in", sec, "minutes");
        })
        .catch(() => console.log("even number"));
      i++;
    }
  }
}
