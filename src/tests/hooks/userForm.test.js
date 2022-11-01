import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Fernando",
    email: "duvis07",
  };

  test("Debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    const event = {
      target: {
        name: "name",
        value: "Melissa",
      },
    };
    act(() => {
      onInputChange(event);
    });
    expect(result.current.formState.name).toBe("Melissa");
  });

  test("Debe de re-establecer el formulario con RESET", () => {
    const newValue = "Melissa";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;
    const event = {
      target: {
        name: "name",
        value: newValue,
      },
    };
    act(() => {
      onInputChange(event);
      onResetForm();
    });
    expect(result.current.formState).toEqual(initialForm);
  });
});
