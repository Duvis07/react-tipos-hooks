import { render, screen, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples";
import { useCounter } from "../../hooks";
import { useFetch } from "../../hooks";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Pruebas multipleCustom", () => {
  const increment = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment,
  });

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
    fireEvent.click(nextButton);

    expect(increment).toHaveBeenCalled();
  });
});
