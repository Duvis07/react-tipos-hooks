import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodos } from "../../hooks/useTodos";

jest.mock("../../hooks/useTodos");

describe("pruebas en el todoApp", () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, desc: "Aprender React", done: false },
      { id: 2, desc: "Aprender Mongo", done: false },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });

  test("debe mostrar el componente correctamente", () => {
    render(<TodoApp />);
    expect(screen.getByText("Aprender React")).toBeTruthy();
    expect(screen.getByText("Aprender Mongo")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
