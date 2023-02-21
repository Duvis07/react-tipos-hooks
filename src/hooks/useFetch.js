import { useEffect, useState } from "react";

export const useFetch = (url) => {
    //esta es la data que vamos a retornar en el hook al momento de ser llamado
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  //esta funcion es asyncrona por que el fetch es una promesa
  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  //el useEffect se ejecuta cuando el componente se renderiza por primera vez
  // y llamamos a la funcion getFetch
  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
