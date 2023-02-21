import { useState } from "react"

//un hooks es si no mas una simple funcion que retorna algo cualquie cosa
//el initialValue es el valor por defecto que va a tener el counter
export const useCounter = ( initialValue = 10 ) => {

    const [ counter, setCounter ] = useState( initialValue )


    //se crea una funcion que va a incrementar el valor del counter
    const increment = ( value = 1 ) => {
        setCounter( counter + value );
    }

    //se crea una funcion que va a decrementar el valor del counter
    const decrement = ( value = 1 ) => {
        // if ( counter === 0 ) return;

        setCounter( counter - value );
    }

    //se crea una funcion que va a resetear el valor del counter al valor inicial
    const reset = () => {
        setCounter( initialValue );
    }

    //aca se exporta todo lo que se va a usar en el componente counterWithCustomHook
    return {
        counter,
        increment,
        decrement,
        reset,
    }

}

