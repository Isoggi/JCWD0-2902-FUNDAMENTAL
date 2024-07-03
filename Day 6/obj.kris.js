var user = {};

user = new Object();

user = {
  name: "David",
  greet() {
    console.log("Hello");
  },
};

user.hobby = "coding";
console.log(user);

delete user.hobby;
console.log(user);
