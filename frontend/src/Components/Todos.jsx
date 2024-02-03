import React, { useEffect, useState } from "react";
import "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodos } from "../Redux/action";
import Todo from "./Todo";
import Tabs from "./Tabs";
import { ALL_TODOS, DONE_TODOS, PENDING_TODOS } from "../Redux/action/type";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Todos = () => {
  const dispatch = useDispatch();
  const [currentSort, setCurrentSort] = useState("default");

  const todos = useSelector((state) => state.todos);
  console.log(todos, "todos array coming from direct store");

  const currentTab = useSelector((state) => state.currentTab);
  console.log(currentTab, "current tab selection");

  const Result = useSelector(state=>console.log(state, 'look into store'));

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  // const getTodos = () => {
  //   if (currentTab === ALL_TODOS) {
  //     return todos;
  //   } else if (currentTab === PENDING_TODOS) {
  //     return todos.filter((todo) => !todo.completed);
  //   } else if (currentTab === DONE_TODOS) {
  //     return todos.filter((todo) => todo.completed);
  //   }
  // };

  const getTodos = () => {
    let sortedTodos = [...todos];

    switch (currentSort) {
      case "dueDate":
        sortedTodos.sort((a, b) => {
          return new Date(a.dueDate) - new Date(b.dueDate);
        });
        break;
      case "priority":
        sortedTodos.sort((a, b) => {
          return a.priority - b.priority;
        });
        break;

      default:
        sortedTodos.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
    }

    switch (currentTab) {
      case ALL_TODOS:
        return sortedTodos;
      case PENDING_TODOS:
        return sortedTodos.filter((todo) => !todo.completed);
      case DONE_TODOS:
        return sortedTodos.filter((todo) => todo.completed);
      default:
        return sortedTodos;
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

  const getChartData = () => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    const pendingCount = todos.filter((todo) => !todo.completed).length;
    const totalCount = todos.length;

    return {
      labels: ["Completed", "Pending", "Total"],
      datasets: [
        {
          data: [completedCount, pendingCount, totalCount],
          backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
          hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        },
      ],
    };
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

      <div>
        <label htmlFor="sort">Sort By: </label>
        <select
          id="sort"
          value={currentSort}
          onChange={(e) => setCurrentSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <ul>
        {getTodos().map((todo) => {
          return <Todo key={todo._id} todo={todo} />;
        })}
      </ul>

      <div style={{ width: "400px", height: "400px" }}>
        <Doughnut data={getChartData()} />
      </div>
    </article>
  );
};

export default Todos;
