import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feture/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
