import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todoArr: [],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addToState: (state, action) => {
      state.todoArr = [...action.payload];
    },
  },
});

export default TodoSlice.reducer;
export const { addToState } = TodoSlice.actions;
