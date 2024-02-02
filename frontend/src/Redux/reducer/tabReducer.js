import { ALL_TODOS, TOGGLE_TAB } from "../action/type";

export const tabReducer = (state = ALL_TODOS, action) => {
  switch (action.type) {
      case TOGGLE_TAB:
          return action.selected
      default: 
          return state;
  }
}