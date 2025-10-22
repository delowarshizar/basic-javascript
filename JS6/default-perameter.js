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
