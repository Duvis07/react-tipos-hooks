import { useState } from "react";

export const CounterApp = () => {
  //Se crea un objeto con los valores iniciales de los contadores
  const [state, setCounter] = useState({
    counter1: 5,
    counter2: 20,
    counter3: 30,
  });
//Se extraen los valores del objeto para poder usarlos en el componente
  const { counter1, counter2, counter3 } = state;

  //se muestra el valor de los contadores en el componente
  //se crea un boton para incrementar el contador 1 manteniendo el valor de los otros contadores
  //en su estado inicial
  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>

      <hr />
      
      <button
        className="btn"
        onClick={() =>
          setCounter({
            ...state,
            counter1: counter1 + 1,
          })
        }
        type="button"
        class="btn btn-primary"
      >
        +1
      </button>
    </>
  );
};
