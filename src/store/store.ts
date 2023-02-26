import { configureStore } from "@reduxjs/toolkit";
import { fruitReducer } from "../reducer/fruits.reducer";

export const store = configureStore({
  reducer: {
    fruit: fruitReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
