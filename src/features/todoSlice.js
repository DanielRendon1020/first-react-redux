import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ text: action.payload });
    },
    removeItem: (state, action) => {
      const { payload: text } = action;
      const itemIndex = state.items.find(({ text: t }) => t === text);
      state.items.splice(itemIndex, 1);
    },
    clearList: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearList } = todoSlice.actions;

export default todoSlice.reducer;
