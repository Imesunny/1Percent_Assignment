import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { todosReducers } from './reducer/todosReducer';
import { tabReducer } from './reducer/tabReducer';


const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})


const middleware = [thunk];

const store = legacy_createStore(
    reducer, applyMiddleware(...middleware))

export default store;