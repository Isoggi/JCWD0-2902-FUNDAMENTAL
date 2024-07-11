/** @format */

// import methods from "./loop";
const data = require("./data.json").users;
const fromModule = require("./loop") as {
  loop2: (arr: any[]) => void;
};
fromModule.loop2([5, 4, 3, 2]);

// methods.loop(data);
