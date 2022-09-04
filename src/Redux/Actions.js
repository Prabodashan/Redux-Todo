export const addTodo = (todo) => {
  return {
    type: "ADD",
    payload: todo,
  };
};
export const updateTodo = (todo, todoIndex) => {
  return {
    type: "UPDATE",
    payload: { name: todo, index: todoIndex },
  };
};
export const deleteTodo = (todoId) => {
  return {
    type: "DELETE",
    payload: todoId,
  };
};
