import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import {
  addTodo,
  removeTodo,
  TodoItem,
} from "./features/counter/todoSlice";
import React, { useState } from "react";

function App() {
  // const count = useSelector((state: RootState) => state.counterSlice.value);
  // const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);

  const todos = useSelector((state: RootState) => state.todoSlice);
  const dispatch = useDispatch();

  function handleAddTodo() {
    if (!title) {
      alert("please add title");
      return;
    }
    const newTodo: Omit<TodoItem, "id"> = {
      status,
      title,
    };
    dispatch(addTodo(newTodo));
  }

  function handleRemove(id: string) {
    dispatch(removeTodo(id));
  }
  return (
    <div className="flex justify-center text-white items-center h-screen bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 ">
      <div className="border p-5">
        <h2 className="text-2xl font-bold text-white">Todo</h2>
        {/* <div className="">
          <button onClick={() => dispatch(increment())}>+</button>
          <span>{count}</span>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div> */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            className="text-black"
          />
          <button
            className="px-10 py-3 border-white border-4 rounded-xl"
            onClick={handleAddTodo}
          >
            ADD TODO
          </button>
          {/* <button className="px-10 py-3 border-white border-4 rounded-xl ">
            REMOVE TODO
          </button> */}
          <input
            type="checkbox"
            name=""
            id=""
            onClick={() => setStatus(!status)}
          />
        </div>
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <div className="border-2 p-2 rounded-xl ">
              title:
              <p className="flex justify-between">
                {todo.title}
                <button
                  className="border-2 px-2 rounded-lg"
                  onClick={() => handleRemove(todo.id)}
                >
                  REMOVE
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
