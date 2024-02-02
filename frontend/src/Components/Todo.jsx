import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  getAllTodos,
  toggleTodo,
  updateTodo,
} from "../Redux/action";
import { format, parseISO } from "date-fns";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [editedDueDate, setEditedDueDate] = useState(todo.dueDate || '');
  const [editedPriority, setEditedPriority] = useState(todo.priority);
  

  const handleToggleTodo = async () => {
    await dispatch(toggleTodo(todo._id));
    await dispatch(getAllTodos());
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    setEditing((prevState) => !prevState);
    const updateResult = await dispatch(
      updateTodo(todo._id, {
        title: editedTitle,
        description: editedDescription,
        dueDate: editedDueDate,
        priority: editedPriority,
      })
    );
    console.log("Update Result:", updateResult);
    await dispatch(getAllTodos());
  };

  return (
    <li
      className="task"
      onClick={handleToggleTodo}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        backgroundColor: todo.completed ? "green" : " #34495e",
      }}
    >
      <div
        className="task-info"
        style={{
          display: editing ? "none" : " ",
        }}
      >
        <div className="task-title">Title: {editedTitle}</div>
        <div className="task-completed">
          Status: {todo.completed ? "Completed" : "Not Completed"}
        </div>
        <div className="task-description">
          Task Description: {editedDescription}
        </div>

        <div className="task-dueDate">Due Date: {editedDueDate}</div>
        <div className="task-priority">Priority: {editedPriority}</div>
      </div>

      <form
        style={{
          display: editing ? "inline" : "none",
        }}
        onSubmit={handleEdit}
      >
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <input
          type="date"
          value={editedDueDate.split("T")[0]}
          onChange={(e) => setEditedDueDate(e.target.value + "T00:00:00.000Z")}
        />


        <input
          type="number"
          value={editedPriority}
          onChange={(e) => setEditedPriority(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>

      <div className="task-actions">
        <span
          className="icon trash"
          onClick={() => dispatch(deleteTodo(todo._id))}
        >
          <i className="fas fa-trash" />
        </span>

        <span
          className="icon edit"
          onClick={() => setEditing((prevState) => !prevState)}
        >
          <i className="fas fa-pen" />
        </span>
      </div>
    </li>
  );
};

export default Todo;
