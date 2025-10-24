class UniStudent {
  constructor(name, result) {
    this.name = name;
    this.result = result;
    console.log(`${this.name} got ${this.result}`);
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}

class UniStudent1 extends UniStudent {
  constructor(name, result) {
    super(name, result);
  }
}
const delowar = new UniStudent1("Delowar", 3.75);
delowar.study();
console.log(delowar);
