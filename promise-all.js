const getData1 = new Promise((resolve, reject) => {
  const data = Math.random() * 10;
  console.log(data);
  if (data > 5) {
    resolve({ num1: data });
  } else {
    reject({ err: "value is rejected" });
  }
});
const getData2 = new Promise((resolve, reject) => {
  const data = Math.random() * 10;
  console.log(data);
  if (data > 5) {
    resolve({ num2: data });
  } else {
    reject({ err: "value is rejected" });
  }
});
const getData3 = new Promise((resolve, reject) => {
  const data = Math.random() * 10;
  console.log(data);
  if (data > 5) {
    resolve({ num3: data });
  } else {
    reject({ err: "value is rejected" });
  }
});

Promise.all([getData1, getData2, getData3])
  .then((data) => console.log("promise resolve", data))
  .catch((error) => console.log(error));
