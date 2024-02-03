import axios from "axios";
import { ADDNEW_TODO, DELETE_TODO, GETALL_TODO, TOGGLE_TAB, TOGGLE_TODO, UPDATE_TODO } from "./type";

const API_URL = `https://dark-pear-sheep-toga.cyclic.app`;

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todo/add`, data);
    console.log(res, "Todos added");

    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todo`);

    dispatch({ type: GETALL_TODO, payload: res.data });
    console.log(res, "Todo from DB");
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/toggle/${id}`);

    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todo/edit/${id}`, data);
    console.log("Update Todo Response:", res.data);
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling updateTodo API ", error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
      const res = await axios.delete(`${API_URL}/todo/delete/${id}`);

      dispatch({ type: DELETE_TODO , payload: res.data });
  } catch (error) {
      console.log('Error while calling deleteTodo API ', error.message);
  }
}
export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab })
}
