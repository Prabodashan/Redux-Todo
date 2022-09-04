import { useState, useEffect } from "react";
import Todo from "./Components/Todo";

const loadTodo = () => {
  let todos = JSON.parse(localStorage.getItem("todoList"));
  if (todos) {
    return todos;
  } else {
    return [];
  }
};

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(loadTodo());
  const [edit, setEdit] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    setTodos((oldTodos) => [
      ...oldTodos,
      { todoName: todo, dateTime: new Date().toLocaleString() },
    ]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((value, index) => {
        return index !== id;
      })
    );
  };

  const editTodo = (id) => {
    todos.forEach((value, index) => {
      if (index === id) {
        setEdit(true);
        setTodoId(id);
        setTodo(value.todoName);
      }
    });
  };

  const updateTodo = () => {
    const newTodoList = todos.map((value, index) => {
      if (index === todoId) {
        return {
          ...value,
          todoName: todo,
          dateTime: new Date().toLocaleString(),
        };
      }
      return value;
    });

    setTodos(newTodoList);
    setEdit(false);
    setTodoId("");
    setTodo("");
  };

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={edit ? updateTodo : addTodo}>
        {edit ? "Update" : "Add"}
      </button>
      <br />
      <br />
      {todos?.map((todo, index) => {
        const { todoName, dateTime } = todo;
        return (
          <Todo
            key={index}
            id={index}
            todoName={todoName}
            dateTime={dateTime}
            editFunc={editTodo}
            deleteFunc={deleteTodo}
          />
        );
      })}
    </>
  );
};

export default App;
