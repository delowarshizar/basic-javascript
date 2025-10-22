const arr = [4, 5, 4, 33];
const max = Math.max(...arr);
console.log(max);

const arr1 = [4, 5, 333, 44, 3];
const arr2 = [...arr, ...arr1];
console.log(arr2);

const player = { name: "delowar", age: 39 };
const playerUpdate = { id: 43, ...player };
console.log(playerUpdate);
