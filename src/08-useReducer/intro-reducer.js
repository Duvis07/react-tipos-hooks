// 1. Crear un reducer con el estado inicial de tdos
const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

//recibe dos argumentos, el estado inicial y la acción
const todoReducer = (state = initialState, action = {}) => {
  //si la acción es agregar, se retorna un nuevo arreglo con el estado inicial y el payload que es el nuevo todo
  if (action.type === "agregar") {
    return [...state, action.payload];
  }

  return state;
};

//se llama a la función todoReducer
let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

const agregarTodoAction = {
  type: "agregar",
  payload: newTodo,
};

//se le envia el estado inicial que son los todos y la acción que es agregarTodoAction
todos = todoReducer(todos, agregarTodoAction);

console.log({ state: todos });
