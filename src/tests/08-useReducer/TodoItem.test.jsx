import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe("Pruebas TodoItem", () => {
  // se crea un objeto todo para poder usarlo en los test de todoitem
  const todo = {
    id: 1,
    desc: "Aprender React",
    done: false,
  };
  // se crea una funcion mock para poder usarla en los test de todoitem
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  // se limpia el mock de las funciones antes de cada test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrarse el todo pendiente por completar", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    // se espera que el elemento li tenga la clase list-group-item
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const btn = screen.getByRole("button");
    expect(btn.className).toBe("btn btn-danger");
  });

  test("debe de mostrar el todo completado", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("span debe de llamar el ToggleTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);

    // se espera que la funcion onToggleTodoMock haya sido llamada con el id del todo
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("button debe de llamar el onDeleteTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    // se espera que la funcion onDeleteTodoMock haya sido llamada con el id del todo
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
