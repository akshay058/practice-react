import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./CountSlice";
import TodoSlice from "./TodoSlice";
const store = configureStore({
  reducer: {
    counter: CountSlice,
    todo: TodoSlice,
  },
});
export default store;
