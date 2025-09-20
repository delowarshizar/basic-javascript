document.getElementById("del-txt").addEventListener("keyup", function (event) {
  const text = event.target.value;
  const delBtn = document.getElementById("del-btn");
  if (text === "Delete") {
    delBtn.removeAttribute("disabled");
    const sec = document.getElementById("secrect-info");
    sec.style.display = "none";
  } else {
    delBtn.setAttribute("disabled", true);
  }
});
