const person = {
  name: "delowar",
  id: 1453,
  section: "63_B",
  deparment: "CSE",
  university: "Daffodil International University",
};
console.log(person);

// object to json
const json = JSON.stringify(person);
console.log(json);

//  json  to  normal object
const perseData = JSON.parse(json)
console.log(perseData)
