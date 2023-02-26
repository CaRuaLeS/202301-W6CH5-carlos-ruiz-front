import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Given Header component", () => {
  describe("When it is render", () => {
    test("Then it should have the title in the screen", () => {
      render(
        <Header>
          <></>
        </Header>
      );
      const element = screen.getByText(/Fruits/i);
      expect(element).toBeInTheDocument();
    });
  });
});
