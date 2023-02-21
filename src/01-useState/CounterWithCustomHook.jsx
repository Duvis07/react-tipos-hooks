import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    //se crea una constante y se desestructura el useCounter que viene del la carpeta hooks
    //aca se desestructura en forma de objeto
  const { counter, increment, decrement, reset } = useCounter();

  //aca se llaman las funciones que se crearon en el useCounter y se le pasa el valor que se quiere incrementar o decrementar
  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button onClick={() => increment(2)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => decrement(2)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
