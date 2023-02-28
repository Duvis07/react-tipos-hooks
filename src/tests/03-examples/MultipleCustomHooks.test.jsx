import { render, screen, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples";
import { useCounter } from "../../hooks";
import { useFetch } from "../../hooks";

// Mocks
jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Pruebas multipleCustom", () => {
  const increment = jest.fn();

  //Mockeamos el useCounter las utilizamos en el componente MultipleCustomHooks
  useCounter.mockReturnValue({
    counter: 1,
    increment,
  });

  //Antes de cada prueba limpiamos los mocks y reseteamos los valores
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de retornar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));

    const nextButton = screen.getByRole("button");

    expect(nextButton.disabled).toBeTruthy();

    /*  screen.debug(); */
  });

  test("debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    //El toBeTruthy es para que no sea null y que exista
    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Fernando")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("debe llamar la funcion incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    //Simulamos el click del boton nextButton
    fireEvent.click(nextButton);

    //Verificamos que se haya llamado la funcion increment
    expect(increment).toHaveBeenCalled();
  });
});
