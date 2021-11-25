import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Landing from "../views/Landing/Landing";
import Country from "../components/Country/Country";

describe("Landing", () => {
  test("Renderiza Enter en el landing", () => {
    render(<Landing />, { wrapper: MemoryRouter });

    expect(screen.getByText("Enter")).toBeInTheDocument();
  });
});

describe("Country", () => {
  describe("correctly render props", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Country key="ARG" ID="ARG" name="argentina" flag="*.jpg" continent="Americas" />
        </MemoryRouter>
      );
    });
    it("renders the continent", () => {
      screen.getByText("Americas");
    });

    it("render img component", () => {
      screen.getByRole("img");
    });
    it("the img has flag alt", () => {
      screen.getByAltText("flag");
    });
  });
});
