//recibe dos argumentos, el estado inicial y la acción
export const todoReducer = (state = [], action) => {

  //si la acción es agregar, se retorna un nuevo arreglo con el estado inicial y el payload que es el nuevo todo
  switch (action.type) {
    case "add":
      return [...state, action.payload];

      //si la acción es borrar, busca el todo con el id que se envia en el payload y lo elimina
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

      //regresa un nuevo arreglo con el todo que se quiere modificar y cambia el done a su opuesto
    case "toggle":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });

    default:
      return state;
  }
};
