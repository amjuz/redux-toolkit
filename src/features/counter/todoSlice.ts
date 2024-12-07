import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "uuid-random";

export type TodoItem = {
  id: string;
  title: string;
  status: boolean
}

export type TodoState = TodoItem[]

const initialState:TodoState = []

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<TodoItem, 'id'>>) => {
      state.push({
        id: uuid(),
        ...action.payload
      });
    },
    removeTodo: (state, action) => {
        const index = state.findIndex(todo => todo.id === action.payload)
        if(index !== -1){
            state.splice(index,1)
        }
    },
    // toggleTodo: (state, action)=> {
    //   const todo = state.findIndex((todo)=> todo.id === action.payload)
    // }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
