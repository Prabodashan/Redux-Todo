export const loadTodos = () => {
  let todos = JSON.parse(localStorage.getItem("todoList"));
  if (todos) {
    return todos;
  } else {
    return [];
  }
};

export const saveTodos = (todos) => {
  localStorage.setItem("todoList", JSON.stringify(todos));
};
