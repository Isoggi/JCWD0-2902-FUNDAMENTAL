class Employee {
  protected name: string;
  protected hour: number[] = [];
  protected basicHour: number = 6;
  protected salary: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  addHour(hour: number) {
    if (hour > 24 || hour < 1) {
      return console.log("Invalid Hour");
    }

    this.hour.push(hour);
  }

  get myHour() {
    return this.hour.reduce((pV, cV) => pV + cV, 0);
  }

  get myName() {
    return this.name;
  }
}

class FullTime_Employee extends Employee {
  #type: string = "full-time";
  #baseSalary: number = 100000;
  #overtimeSalary: number = 75000;
  constructor(name: string) {
    super(name);
  }
  private calculateSalary() {
    let result = this.hour.reduce((pV, cV) => {
      if (cV > this.basicHour) {
        return (this.salary +=
          this.basicHour * this.#baseSalary +
          (cV - this.basicHour) * this.#overtimeSalary);
      } else return (this.salary += cV * this.#baseSalary);
    }, 0);
    return result;
  }

  show() {
    this.calculateSalary();
    console.log(
      "Employee Name:",
      `'${this.name}'`,
      "Employee Type:",
      `'${this.#type}'`,
      "working hour(s):",
      this.myHour,
      "salary:",
      "Rp. " + this.salary.toLocaleString("id-ID")
    );
  }
}

class PartTime_Employee extends Employee {
  #type: string = "part-time";
  #baseSalary = 50000;
  #overtimeSalary = 30000;
  constructor(name: string) {
    super(name);
  }
  private calculateSalary() {
    let result = this.hour.reduce((pV, cV) => {
      if (cV > this.basicHour) {
        return (this.salary +=
          this.basicHour * this.#baseSalary +
          (cV - this.basicHour) * this.#overtimeSalary);
      } else return (this.salary += cV * this.#baseSalary);
    }, 0);
    return result;
  }

  show() {
    this.calculateSalary();
    console.log(
      "Employee Name:",
      `'${this.name}'`,
      "Employee Type:",
      `'${this.#type}'`,
      "working hour(s):",
      this.myHour,
      "salary:",
      "Rp. " + this.salary.toLocaleString("id-ID")
    );
  }
}
const ftEmployee = new FullTime_Employee("jordan");
ftEmployee.addHour(7);
ftEmployee.show();
ftEmployee.addHour(7);
ftEmployee.addHour(7);
ftEmployee.addHour(7);

ftEmployee.show();

const ptEmployee = new PartTime_Employee("jordan");
ptEmployee.addHour(7);
ptEmployee.show();
ptEmployee.addHour(7);
ptEmployee.addHour(7);
ptEmployee.addHour(7);

ptEmployee.show();
