/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable react-hooks/rules-of-hooks */
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { FruitStructure } from "../model/fruit";
import { fruitReducer } from "../reducer/fruits.reducer";
import { FruitsRepo } from "../services/api.fruits.repo";
import { useFruits } from "./use.fruits";

describe("Given the Hook component", () => {
  let elements: HTMLElement[];
  let mockRepo: FruitsRepo;

  const mockStore = configureStore({
    reducer: { fruit: fruitReducer },
    preloadedState: {
      fruit: {
        fruits: [
          {
            id: 1,
            name: "Test",
            color: "testing",
            weight: 2,
          },
          {
            id: 2,
            name: "Test",
            color: "testing",
            weight: 2,
          },
        ],
        fruit: {} as FruitStructure,
      },
    },
  });

  beforeEach(() => {
    const mockFruitsfunctionsRepo = {
      readFruits: jest.fn(),
      readOneFruits: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    const TestRepo = function () {
      const { readFruit, updateFruit, createFruit, deleteFruit } =
        useFruits(mockRepo);

      return (
        <>
          <button onClick={() => readFruit(1)}>read</button>
          <button onClick={() => updateFruit}>update</button>
          <button onClick={() => createImageBitmap}>create</button>
          <button onClick={() => deleteFruit(1)}>delete</button>
        </>
      );
    };
    render(
      <Provider store={mockStore}>
        <TestRepo></TestRepo>
      </Provider>
    );
    elements = [
      screen.getAllByRole("button")[0],
      screen.getByText(/update/i),
      screen.getAllByRole("button")[2],
      screen.getAllByRole("button")[3],
    ];
  });
  describe("When readFruits", () => {
    test("Then handle error should throw an error", () => {
      expect(elements[0]).toBeInTheDocument();
      userEvent.click(elements[0]);
      expect(mockRepo.readFruits).toHaveBeenCalled();
    });
  });
  describe("When updateFruits", () => {
    test("Then handle error should throw an error", () => {
      expect(elements[1]).toBeInTheDocument();
      userEvent.click(elements[1]);
      expect(mockRepo.updateFruits).toHaveBeenCalled();
    });
  });
  describe("When createFruits", () => {
    test("Then handle error should throw an error", () => {
      expect(elements[2]).toBeInTheDocument();
      userEvent.click(elements[2]);
      expect(mockRepo.createFruits).toHaveBeenCalled();
    });
  });
  describe("When deleteFruits", () => {
    test("Then handle error should throw an error", () => {
      expect(elements[3]).toBeInTheDocument();
      userEvent.click(elements[3]);
      expect(mockRepo.deleteFruits).toHaveBeenCalled();
    });
  });
});
