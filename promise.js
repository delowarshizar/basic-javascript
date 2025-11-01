const getData = new Promise((resolve, reject) => {
  const data = Math.random() * 10;
  console.log(data);
  if (data > 5) {
    resolve({ num: data });
  } else {
    reject({ err: "value is rejected" });
  }
});

getData
  .then((data) => console.log("promise resolve", data))
  .catch((error) => console.log(error));
