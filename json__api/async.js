const loadData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const info = await data.json();
  console.log(info);
  console.log("delowar");
  console.log(true);
};
loadData();
