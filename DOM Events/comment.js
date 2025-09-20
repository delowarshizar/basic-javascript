console.log("file conected");
document.getElementById("comment-btn").addEventListener("click", function () {
  const newComment = document.getElementById("newComment");
  console.log(newComment.value);

  const parents = document.getElementById("comment-box");
  console.log(parents);

  const newChild = document.createElement("p");
  newChild.innerText = newComment.value;
  newChild.classList.add("comment");

  parents.appendChild(newChild);
  newComment.value = "";
  //   // console.log('button clicked')
});
