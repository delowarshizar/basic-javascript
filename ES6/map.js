const numbers = [4, 3, 45, 5, 4];
const value = numbers.map((x) => x * x);
console.log(value);

numbers.forEach((x) => {
  const square = x * x;
  console.log(square);
});

const greaterthan5 = numbers.filter((y) => y >=  5);
console.log(greaterthan5)
