import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

export const CountSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      //   console.log(state);
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
  },
});

export default CountSlice.reducer;
export const { increment, decrement, incrementBy } = CountSlice.actions;
