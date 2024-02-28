import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },

  reducers: {
    addTodo: () => {},

    removeTodo: () => {},
  },
});
export const { addTodo, removeTodo } = todosSlice.actions;
export const todoReducer = todosSlice.reducer;
