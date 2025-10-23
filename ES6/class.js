class Student {
  constructor(name, id, cgpa) {
    this.name = name;
    this.id = id;
    this.cgpa = cgpa;
    console.log("Student information");
  }
  study() {}
  run() {}
}

const student1 = new Student("delowar", 1334, 3.76);
const student2 = new Student("caeser", 1354, 3.66);
console.log(student1);
console.log(student2);
