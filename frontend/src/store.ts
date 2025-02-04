import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import stocksReducer from "./stocks/stocksSlice";

export const store = configureStore({
  reducer: {
    stocks: stocksReducer,
  },
});

// Infer types for the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create a typed hook for dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
