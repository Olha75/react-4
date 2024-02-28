import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: () => {},
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
