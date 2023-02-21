import { useEffect, useState } from "react";
import { Message } from "./Message";

//el estado inicial del formulario se puede definir en el useState
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider2",
    email: "fernando@google.com",
  });

  //se desestructura el formState para poder usar los valores de los campos del formulario
  const { username, email } = formState;

  //se crea una funcion que se encarga de actualizar el estado del formulario
  //se desestructura el target para poder obtener el nombre y el valor del campo del formulario
  //del target se obtiene el name y el value
  //se desestructura el formState para poder obtener los valores de los campos del formulario
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //es una simple funcion tiene un callback que se ejecuta cuando 
  //el componente se renderiza o cambia el estado

  //se ejecuta cuando el componente se renderiza por primera vez
  //no se vuelve a ejecutar cuando el componente se renderiza o cambia el estado
  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  //se ejecuta cuando el componente se renderiza o cambia el estado del formulario
  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);

  //se ejecuta cuando el componente se renderiza o cambia el estado del email
  useEffect(() => {
    // console.log('email changed!');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "strider" && <Message />}
    </>
  );
};
