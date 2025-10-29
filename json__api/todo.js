const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      Display(json);
    });
};

const Display = (posts) => {
  const ulbox = document.getElementById("todo-box");
  ulbox.innerText = "";
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.innerText = post.title;
    ulbox.appendChild(li);
  });
};
loadTodo()