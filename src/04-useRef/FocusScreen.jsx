import { useRef } from "react";

export const FocusScreen = () => {
  //nos mantiene una referencia al elemento y no  nos renderiza de nuevo el componente
  const inputRef = useRef();

  const onClick = () => {
    //Con este solo nos selecciona el primer input que encuentre en el documento
    // document.querySelector('input').select();
    // console.log(inputRef);
    inputRef.current.select();
  };
//siempre con el useref se debe de poner el current para que nos seleccione el elemento indicado
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};
