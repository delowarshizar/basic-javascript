const arr = [4, 5, 4, 33];
const max = Math.max(...arr);
console.log(max);

const arr1 = [4, 5, 333, 44, 3];
const arr2 = [...arr, ...arr1];
console.log(arr2);

const player = { name: "delowar", age: 39 };
const playerUpdate = { id: 43, ...player };
console.log(playerUpdate);

// destructuring

const people = { name: "delowar husain", id: 1453, section: "b" };
const {name,id,section} = people;
console.log(name,id,section)

// const {name,id,section} = { name: "delowar husain", id: 1453, section: "b" };
// console.log(name,id,section)

const [a,b,c,d,e] = [4,4,333,3333,4]
console.log(a,b,c,d,e)