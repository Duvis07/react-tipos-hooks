import React from "react";

///se recibe el todo, la funcion para eliminar y la funcion para cambiar el estado
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  //se renderiza el componente TodoItem y se ejecuta la funcion onToggleTodo
  // a partir de esta se tacha el todo y se cambia el estado
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done && "text-decoration-line-through"
        }`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label="span"
      >
        {todo.desc}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
