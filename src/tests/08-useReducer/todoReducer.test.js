import { todoReducer } from "../../08-useReducer/todoReducer";

describe("pruebas todoReducer", () => {
  const inicialState = [
    {
      id: 1,
      desc: "Aprender React",
      done: false,
    },
  ];

  test("debe retornar el estado inicial", () => {
    const newState = todoReducer(inicialState, {});
    expect(newState).toBe(inicialState);
  });

  test("debe agregar un TODO", () => {
    const newTodo = {
      id: 2,
      desc: "Aprender Mongo",
      done: false,
    };
    const newState = todoReducer(inicialState, {
      type: "add",
      payload: newTodo,
    });
    expect(newState.length).toBe(2);
    expect(newState).toEqual([...inicialState, newTodo]);
  });
  

  test("debe borrar un TODO", () => {
    const newState = todoReducer(inicialState, {
      type: "delete",
      payload: 1,
    });
    expect(newState.length).toBe(0);
  });

    test("debe hacer el TOGGLE del TODO", () => {
        const newState = todoReducer(inicialState, {
            type: "toggle",
            payload: 1,
        });
        expect(newState[0].done).toBe(true);
        });
});
