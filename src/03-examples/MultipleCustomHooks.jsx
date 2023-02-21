import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
    //se utiliza el custom hook useCounter para incrementar el contador en 1
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )
  //si la tiene un valor, entonces extrae el primer elemento del array en la posición 0
  const { author, quote } = !!data && data[0];

  //se realiza un operador ternario para mostrar el componente LoadingQuote o el componente Quote
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
