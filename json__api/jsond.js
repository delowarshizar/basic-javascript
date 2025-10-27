const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      dataDisplay(json);
    });
};

const dataDisplay = (posts) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = " ";
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.innerText = post.title;
    postContainer.appendChild(li);
  });
};
