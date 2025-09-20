document.getElementById("add-btn").addEventListener("click", function () {
  console.log("conect");
  const oldList = document.getElementById("item-list");
  const newList = document.createElement("li");
  newList.classList.add("items");
  newList.innerText = "New items added";
  oldList.appendChild(newList);
});

// const items = document.getElementsByClassName("items");
// for (const item of items) {
//   item.addEventListener("click", function (event) {
//     event.target.parentNode.removeChild(event.target);
//   });
// }

document
  .getElementById("item-list")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
