import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { desc, onInputChange, onResetForm } = useForm({
    desc: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (desc.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: desc,
      done: false,
    };

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
