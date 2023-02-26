import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import { Header } from "../header/header";
import App from "./App";

jest.mock("../Header/header");

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it is in the document", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(Header).toHaveBeenCalled();
    });
  });
});
