import "./style.css";

const todoInput = document.getElementById("todo-text") as HTMLInputElement;
const todoAdd = document.getElementById("todo-add") as HTMLButtonElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;

todoAdd.addEventListener("click", () => {
  const listId = `todo-item-${Date.now()}`;
  const todoText = todoInput.value;
  todoInput.value = "";
  const li = document.createElement("li");
  li.id = listId;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.dataset.todo = listId;

  const span = document.createElement("span");
  span.innerText = todoText;

  checkbox.addEventListener("click", (ev) => {
    const target = ev.target as HTMLInputElement;
    const targetTodo = target.dataset.todo;
    const targetSpan = document.querySelector(`#${targetTodo} span`);

    if (targetSpan) {
      targetSpan.className = target.checked ? "checked" : "";
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  todoList.appendChild(li);
  todoAdd.disabled = true;
});

todoInput.addEventListener("keyup", (ev) => {
  const input = ev.target as HTMLInputElement;

  todoAdd.disabled = input.value !== "" ? false : true;
});