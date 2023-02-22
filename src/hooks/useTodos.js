import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

//se inicializa el estado con los datos del local storage si es nulo se retorna un arreglo vacio
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //se guarda en el local storage cada vez que se modifica el estado
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };

    dispatch(action);
  };

  //se envia el id del todo que se quiere eliminar al reducer
  const handleDeleteTodo = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "toggle",
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
