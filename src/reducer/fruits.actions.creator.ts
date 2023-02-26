import { createAction } from "@reduxjs/toolkit";
import { FruitStructure } from "../model/fruit";
import { fruitActions } from "./fruits.actions";

export const readCreator = createAction<FruitStructure[]>(fruitActions.readAll);
export const readOneCreator = createAction<FruitStructure>(
  fruitActions.readOne
);
export const updateCreator = createAction<FruitStructure>(fruitActions.update);
export const createCreator = createAction<FruitStructure>(fruitActions.create);
export const deleteCreator = createAction<FruitStructure["id"]>(
  fruitActions.delete
);
