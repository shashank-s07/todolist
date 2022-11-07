import React from "react";
import { Todoitem } from "../MyComponent/TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length == 0
        ? "NO TODOS TO DISPALY"
        : props.todos.map((todo) => {
            return (
              <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
