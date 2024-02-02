import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodos } from "../Redux/action";
import Todo from "./Todo";
import Tabs from "./Tabs";
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from "../Redux/action/type";

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  console.log(todos, "todos array coming from direct store");

  const currentTab = useSelector((state) => state.currentTab);
  console.log(currentTab, "current tab selection");

  // const Result = useSelector(state=>console.log(state));

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.completed);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.completed);
    }
  };

  const removeDoneTodos = () => {
    todos.forEach(({ completed, _id }) => {
      if (completed) {
        dispatch(deleteTodo(_id));
        dispatch(getAllTodos());

      }
    });
  };

  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />

        {todos.some((todo) => todo.completed) ? (
          <button onClick={removeDoneTodos} className="button clear">
            Remove Done Todos
          </button>
        ) : null}
      </div>
      <ul>
        {getTodos().map((todo) => {
          return <Todo key={todo._id} todo={todo} />;
        })}
      </ul>
    </article>
  );
};

export default Todos;
