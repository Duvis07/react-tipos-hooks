import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../09-useContext/MainApp";

describe("pruebas en el MainApp", () => {
  test("debe de mostrar el homePage", () => {
    //EL MEMORY ROUTER ES UNA FORMA DE SIMULAR EL ROUTER EN LOS TESTS
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("debe de mostrar el loginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
