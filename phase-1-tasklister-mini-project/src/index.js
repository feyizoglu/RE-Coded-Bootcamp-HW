document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo(e.target["new-task-description"].value);
    e.target["new-task-description"].value = "";
  });
  function addTodo(todo) {
    let li = document.createElement("li");
    li.textContent = `${todo} `;
    let btn = document.createElement("button");
    btn.addEventListener("click", (e) => li.remove());
    btn.innerText = "X";
    li.appendChild(btn);
    let ul = document.querySelector("#tasks");
    ul.appendChild(li);
  }
});
