import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Menu } from "./app-menu";
import { MenuOption } from "../app/App";

describe("Given Menu component", () => {
  describe("When it renders a component", () => {
    const mockOptions: MenuOption[] = [
      {
        label: "test",
        path: "/test",
      },
    ];
    render(
      <Router>
        <Menu options={mockOptions}></Menu>
      </Router>
    );
    test("Then it should render the mock given", () => {
      const element = screen.getByText(mockOptions[0].label);
      expect(element).toBeInTheDocument();
    });
  });
});
