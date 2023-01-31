import {ACTION_CREATE_TODO, ACTION_TOGGLE_TODO, ACTION_DELETE_TODO, ACTION_SET} from '../actions/todos'

const initialState = {
    todos: sessionStorage.todos ? JSON.parse(sessionStorage.todos) : [],
    text: ''
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ACTION_CREATE_TODO: return {...state, todos: [...state.todos, {
                text: payload,
                id: crypto.randomUUID(),
                done: false
        }]}
        case ACTION_TOGGLE_TODO: return {...state, todos:
            state.todos.map(todo => todo.id === payload ? {...todo, done: !todo.done} : todo)
        }
        case ACTION_DELETE_TODO: return {
            ...state, todos:
                state.todos.filter(todo =>
                    todo.id !== payload
                )
        }
        case ACTION_SET: return {
            ...state,
            text: payload,
        }

        default: return state
    }
}

export default rootReducer