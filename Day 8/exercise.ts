/** @format */

// Specifications :
// Create a program to calculate total salary based on employee type
// There are two types of employee : full-time & part-time
// Salary for full-time employee :
// IDR 100.000 / hour
// IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// Salary for part-time employee :
// IDR 50.000 / hour
// IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// Requirements :
// Create an Employee as a parent class
// Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// Create a method in that class to add working hour per day
// Create a method in that class to calculate total salary
// Use inheritance concept

class Employee {
  protected name: string;
  protected hour: number = 0;
  protected salary: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  addHour(hour: number) {
    if (hour > 24 && hour < 1) return console.log("invalid hour");

    this.hour += hour;
  }

  get myHour() {
    return this.hour;
  }
  get myName() {
    return this.name;
  }
}

const e = new Employee("udin");

class FulltimeEmployee extends Employee {
  private type = "full-time";
  private baseSalary = 100000;
  private overTimeSalary = 75000;

  constructor(name: string) {
    super(name);
  }

  private calculateSalary() {
    if (this.hour > 6)
      return (this.salary =
        this.baseSalary * 6 + (this.hour - 6) * this.overTimeSalary);
    return (this.salary = this.baseSalary * this.hour);
  }
  show() {
    this.calculateSalary();
    console.log(
      "Employee Name:",
      `'${this.name}'`,
      "Employee Type:",
      `'${this.type}'`,
      "working hour(s):",
      this.hour,
      "salary:",
      "Rp. " + this.salary.toLocaleString("id-ID")
    );
  }
}

class ParttimeEmployee extends Employee {
  private type = "part-time";
  private baseSalary = 50000;
  private overTimeSalary = 30000;

  constructor(name: string) {
    super(name);
  }

  private calculateSalary() {
    if (this.hour > 6)
      return (this.salary =
        this.baseSalary * 6 + (this.hour - 6) * this.overTimeSalary);
    return (this.salary = this.baseSalary * this.hour);
  }

  show() {
    this.calculateSalary();
    console.log(
      "Employee Name:",
      `'${this.name}'`,
      "Employee Type:",
      `'${this.type}'`,
      "working hour(s):",
      this.hour,
      "salary:",
      "Rp. " + this.salary.toLocaleString("id-ID")
    );
  }
}

const ftEmployee = new FulltimeEmployee("jordan");
const ptEmployee = new ParttimeEmployee("jhonny");

ftEmployee.addHour(7);
ftEmployee.show();

ptEmployee.addHour(7);
ptEmployee.show();

// Specifications :
// Create a shooting game between two player
// Each player has three properties : name, health and power
// Each player will take turns to shooting
// Before shooting, players get a chance to get random items (health +10 or power +10)
// The game will continue until one of the players has health < 0
// Requirements :
// Create ShootingGame & Player class
// ShootingGame class :
// constructor(player1, player2) → player objects as a parameter
// getRandomItem() → return { health: 0 or 10, power: 0 or 10 } => {health : 0 , power : 10}
// start() → start shooting games
// Player class :
// Property → name, health (default 100), power (default 10)
// damage(power) →  subtract player health
// useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ShootingGame start() function flow :
// In every turn :
// Show each player status before shooting
// Get random item for each player before shooting
// Show each player status after shooting
// Show winner name

type TItem = {
  health: number;
  power: number;
};

class Player {
  private name: string;
  private health: number = 100;
  private power: number = 10;

  constructor(name: string) {
    this.name = name;
  }

  damage(power: number) {
    if (power > this.health) return (this.health = 0);
    this.health -= power;
  }

  get myName() {
    return this.name;
  }
  get myHealth() {
    return this.health;
  }

  get myPower() {
    return this.power;
  }

  showStatus() {
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power}) `
    );
  }

  useItem(item: TItem) {
    this.health += item.health;
    this.power += item.power;
  }
}

class ShootingGame {
  private player1: Player;
  private player2: Player;
  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  private getRandomItem(): TItem {
    if (this.random()) return { health: 10, power: 0 };
    return { health: 0, power: 10 };
  }

  private random() {
    return Math.floor(Math.random() * 2); // 0 atau 1
  }
  private separator(text: string) {
    console.log(`\n================= ${text} ====================\n`);
  }

  start() {
    this.separator("START");
    this.player1.showStatus();
    this.player2.showStatus();
    let counter = 1;
    while (this.player2.myHealth && this.player1.myHealth) {
      //   const randomItem1 = this.getRandomItem(); // {health:0, power:10}
      //   const randomItem2 = this.getRandomItem(); // {health:10, power:0}
      this.player1.useItem(this.getRandomItem()); // { health:100, power: 20}
      this.player2.useItem(this.getRandomItem()); // { health:110, power: 10}

      this.separator(`Round ${counter}`);
      this.player1.showStatus();
      this.player2.showStatus();
      if (this.random()) {
        //0 atau 1
        this.player1.damage(this.player2.myPower);
        if (!this.player1.myHealth) break;
        this.player2.damage(this.player1.myPower);
      } else {
        this.player2.damage(this.player1.myPower);
        if (!this.player2.myHealth) break;
        this.player1.damage(this.player2.myPower);
      }
      counter++;
    }
    this.separator("END");

    this.player1.showStatus();
    this.player2.showStatus();
    this.separator("WINNER");

    console.log(
      "The Winner is",
      this.player1.myHealth
        ? this.player1.myName.toUpperCase()
        : this.player2.myName.toUpperCase()
    );
  }
}

const player1 = new Player("jordan");
const player2 = new Player("jhonny");

const game = new ShootingGame(player1, player2);

game.start();
