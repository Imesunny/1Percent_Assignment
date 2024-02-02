import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO } from "../action/type";

export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case ADDNEW_TODO:
      return [action.payload, ...state];
    case GETALL_TODO:
      return action.payload;
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};
