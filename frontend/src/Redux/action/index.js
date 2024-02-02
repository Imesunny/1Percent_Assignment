import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO } from './type';

const API_URL = "http://localhost:8080";

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todo/add`,data );
        console.log(res, 'Todos added');

        dispatch({ type: ADDNEW_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API ', error.message);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todo`);

        dispatch({ type: GETALL_TODO , payload: res.data });
        console.log(res,"Todo from DB");
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/toggle/${id}`);

        dispatch({ type: TOGGLE_TODO , payload: res.data });
        
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

