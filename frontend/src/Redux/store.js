import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import tabReducer from './reducer/tabReducer';
import { todosReducers } from './reducer/todosReducer';


const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})


const middleware = [thunk];

const store = legacy_createStore(
    reducer, applyMiddleware(...middleware))

export default store;