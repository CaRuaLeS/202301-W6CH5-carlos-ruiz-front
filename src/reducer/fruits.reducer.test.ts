import { FruitStructure } from "../model/fruit";
import * as ac from "./fruits.actions.creator";
import { fruitReducer } from "./fruits.reducer";

const mockFruits = [
  { id: 1, name: "Apple", color: "red", weight: 1 },
  { id: 2, name: "Banana", color: "yellow", weight: 0.4 },
];

const mockFruitState = {
  fruits: [
    { id: 1, name: "Apple", color: "red", weight: 1 },
    { id: 2, name: "Banana", color: "yellow", weight: 0.4 },
  ],
  fruit: {} as FruitStructure,
};

describe("Given the fruitReducer", () => {
  describe("When we try the default state", () => {
    test("Then it should return the initial state", () => {
      const initialState = undefined;
      const action = { type: "" };
      const element = fruitReducer(initialState, action);
      expect(element).toEqual({ fruit: {}, fruits: [] });
    });
  });
  describe("When we make the readCreator", () => {
    test("Then it should return the mock state", () => {
      const initialState = undefined;
      const action = ac.readCreator(mockFruits);
      const element = fruitReducer(initialState, action);
      expect(element).toEqual({
        fruit: {},
        fruits: [
          { color: "red", id: 1, name: "Apple", weight: 1 },
          { color: "yellow", id: 2, name: "Banana", weight: 0.4 },
        ],
      });
    });
  });
  describe("When we make the readOneCreator", () => {
    test("Then it should return mock we read", () => {
      const action = ac.readOneCreator({
        id: 2,
        name: "Banana",
        color: "yellow",
        weight: 0.4,
      });
      const element = fruitReducer(mockFruitState, action);
      expect(element).toEqual({
        fruit: {
          id: 2,
          name: "Banana",
          color: "yellow",
          weight: 0.4,
        },
        fruits: [
          { id: 1, name: "Apple", color: "red", weight: 1 },
          { id: 2, name: "Banana", color: "yellow", weight: 0.4 },
        ],
      });
    });
  });
  describe("When we make the updateCreator", () => {
    test("Then it should return the mock state", () => {
      const mockUpdate = {
        id: 2,
        name: "Banana",
        color: "green",
        weight: 0.4,
      };

      const action = ac.updateCreator(mockUpdate);
      const element = fruitReducer(mockFruitState, action);
      expect(element).toEqual({
        fruit: {},
        fruits: [
          { color: "red", id: 1, name: "Apple", weight: 1 },
          { color: "green", id: 2, name: "Banana", weight: 0.4 },
        ],
      });
    });
  });
  describe("When we make the createCreator", () => {
    test("Then it should return the mock state with the new object", () => {
      const mockCreate = {
        id: 3,
        name: "Pineapple",
        color: "grey",
        weight: 1,
      };

      const action = ac.createCreator(mockCreate);
      const element = fruitReducer(mockFruitState, action);
      expect(element).toEqual({
        fruit: {},
        fruits: [
          { color: "red", id: 1, name: "Apple", weight: 1 },
          { color: "yellow", id: 2, name: "Banana", weight: 0.4 },
          {
            id: 3,
            name: "Pineapple",
            color: "grey",
            weight: 1,
          },
        ],
      });
    });
  });
  describe("When we make the deleteCreator", () => {
    test("Then it should return the mock state", () => {
      const action = ac.deleteCreator(1);
      const element = fruitReducer(mockFruitState, action);
      expect(element).toEqual({
        fruit: {},
        fruits: [{ color: "yellow", id: 2, name: "Banana", weight: 0.4 }],
      });
    });
  });
});
