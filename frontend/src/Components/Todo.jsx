import React from "react";
import { useDispatch } from "react-redux";
import { getAllTodos, toggleTodo } from "../Redux/action";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleTodo = async () => {
    await dispatch(toggleTodo(todo._id));
    dispatch(getAllTodos());
  };

  return (
    <li className="task" onClick={handleToggleTodo}>
      <div className="task-info">
        <div className="task-title">Title: {todo.title}</div>
        <div className="task-completed">
          Status: {todo.completed ? "Completed" : "Not Completed"}
        </div>
        <div className="task-description">
          Task Description: {todo.description}
        </div>

        <div className="task-dueDate">Due Date: {todo.dueDate}</div>
        <div className="task-priority">Priority: {todo.priority}</div>
      </div>

      <div className="task-actions">
        <span className="icon trash">
          <i className="fas fa-trash" />
        </span>

        <span className="icon edit">
          <i className="fas fa-pen" />
        </span>
      </div>
    </li>
  );
};

export default Todo;
