import {createStore} from 'redux';
import todosReducer from "./reducers/todos";

export const store = createStore(todosReducer);

export default store;