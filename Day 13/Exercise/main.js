// let que = require("./class");
import { Queue as que } from "./class.js";

const runner = new que();
runner.add(1);
console.log(runner.show());
runner.add(2);
runner.add(3);
runner.add(4);
runner.run();
