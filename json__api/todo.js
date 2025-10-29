const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      Display(json);
    });
};

const Display = (posts) => {
  const todoBox = document.getElementById("todo-box");
  todoBox.innerHTML = "";
  posts.forEach((post) => {
    const todo = document.createElement("div");
    todo.innerHTML = ` <div class="todo-card">
        <p>  ${
          post.completed == true
            ? `<i class="fa-solid fa-square-check"></i>`
            : `<i class="fa-regular fa-square-check"></i>`
        }</p>
        <h2> ${post.title}</h2>
    </div>`;
    todoBox.appendChild(todo);
  });
};
loadTodo();
