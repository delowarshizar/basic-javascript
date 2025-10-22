function add(num1 = 0, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
}
add(10, 10);

// string template
function mul(num3 = 1, num4 = 1) {
  const result3 = `Multiply of ${num3} and ${num4} equals ${num3 * num4}`;
  console.log(result3);
}
mul(10, 10);

// arrow function
const sub = (var1, var2) => var1 - var2;

console.log(sub(3, 4));

const div = (var3, var4) => {
  const firstDiv = var3 / 3;
  const secondDiv = var4 / 3;
  const result = firstDiv + secondDiv;
  return result;
};

console.log(div(53, 33));
