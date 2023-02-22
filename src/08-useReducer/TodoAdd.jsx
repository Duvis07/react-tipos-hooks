import React from "react";
import { useForm } from "../hooks/useForm";
//un reducer es una funcion que no puede ser asincrona
//debe ser una funcion pura
//debe retornar un nuevo estado
//reciben dos argumentos el estado y la accion
//no debe llamar el localStorage, o session storage

export const TodoAdd = ({ onNewTodo }) => {
  //se reutiliza el hook useForm para el formulario de agregar
  const { desc, onInputChange, onResetForm } = useForm({
    desc: "",
  });

  //se recibe el evento del formulario y se ejecuta la funcion onNewTodo
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (desc.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: desc,
      done: false,
    };

    //se ejecuta la funcion onNewTodo que se recibe por props y recibe el nuevo todo
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="desc"
        className="form-control"
        placeholder="Que hay que hacer?"
        autoComplete="off"
        value={desc}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
        Agregar
      </button>
    </form>
  );
};
