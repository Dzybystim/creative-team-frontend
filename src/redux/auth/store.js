import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./authslice";

  
  export const store = configureStore({
    reducer: rootReducer,
  });