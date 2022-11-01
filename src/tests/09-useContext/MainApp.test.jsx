import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../09-useContext/MainApp";

describe("pruebas en el MainApp", () => {
  test("debe de mostrar el homePage", () => {
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
