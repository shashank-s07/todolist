import React, { useState } from "react";
import "./desgin.css";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be empty");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className style={{ backgroundColor: "33FFEC" }}>
      <div className="container my-3">
        <h3 className="text-center">Add a Todo</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="form-control"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Desc" className="form-label">
              Todo Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className="form-control"
              id="desc"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-success">
            Add ToDo
          </button>
        </form>
      </div>
    </div>
  );
};
