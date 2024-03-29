import React from "react";
import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

/* const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false,
  },
]; */

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodos();

  //se renderiza el componente todoApp
  return (
    <>
      <h1>
        <h2>
          TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small>{" "}
        </h2>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar tarea</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
