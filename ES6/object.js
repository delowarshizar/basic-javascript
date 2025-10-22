const employee = {
  name: "delwoar Husain",
  id: 1453,
  Salary: 20000,
  experience: 1,
};

console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));

// Object.freeze(employee) cant add or delete or modify
Object.seal(employee); //can modify but cannt delete anything or add anything
delete employee.Salary;
employee.location = "rajshahi";
employee.name = "Caesar";
console.log(Object.entries(employee));

//for in
for (const keys in employee) {
  const value = employee[keys];
  console.log(keys, value);
}
