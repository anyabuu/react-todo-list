export const ACTION_CREATE_TODO = 'ACTION_CREATE_TODO';
export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO';
export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';

export const ACTION_SET = 'ACTION_SET';

export const createTodo = (text) => {
    return {
        type: ACTION_CREATE_TODO,
        payload: text,
    }
}

export const toggleTodo = (id) => {
    return {
        type: ACTION_TOGGLE_TODO,
        payload: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: ACTION_DELETE_TODO,
        payload: id
    }
}

export const set = (payload) => {
    return {
        type: ACTION_SET,
        payload
    }
}