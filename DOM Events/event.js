console.log("file connected successfully");

document.getElementById("btn-for-login").addEventListener("click", function () {
  const userinfo = document.getElementById("user-info");
  userinfo.innerText = "Login Successfully";
});

document
  .getElementById("btn-for-update")
  .addEventListener("click", function () {
    const name = document.getElementById("value-name");
    const newName = document.getElementById("name");
    newName.innerText = name.value;
  });
