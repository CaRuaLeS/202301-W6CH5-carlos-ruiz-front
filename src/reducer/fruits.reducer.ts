import { createReducer } from "@reduxjs/toolkit";
import { FruitStructure } from "../model/fruit";
import * as ac from "./fruits.actions.creator";

export type fruitsState = {
  fruits: FruitStructure[];
  fruit: FruitStructure;
};
const initialState: fruitsState = {
  fruits: [],
  fruit: {} as FruitStructure,
};

export const fruitReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.readCreator, (state, { payload }) => ({
    ...state,
    fruits: payload,
  }));
  builder.addCase(ac.readOneCreator, (state, { payload }) => ({
    ...state,
    fruit: payload,
  }));
  builder.addCase(ac.updateCreator, (state, { payload }) => ({
    ...state,
    fruits: state.fruits.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    ),
  }));
  builder.addCase(ac.createCreator, (state, { payload }) => ({
    ...state,
    fruits: [...state.fruits, payload],
  }));
  builder.addCase(ac.deleteCreator, (state, { payload }) => ({
    ...state,
    fruits: state.fruits.filter((item) => item.id !== payload),
  }));
  builder.addDefaultCase((state) => state);
});
