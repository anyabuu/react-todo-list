import React, {useEffect} from "react";
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {createTodo, deleteTodo, set, toggleTodo} from "./store/actions/todos";

function App() {

    const dispatch = useDispatch();
    const {todos, text} = useSelector(state => ({
        todos: state.todos,
        text: state.text
    }));

    useEffect(() => {
        window.sessionStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const onInputValueChange = (e) => {
        dispatch(set(e.target.value));
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }

        dispatch(createTodo(text))
        dispatch(set(''));
    }

    const onDeleteItem = (e, id) => {
        dispatch(deleteTodo(id))
    }

    const onHandleComplete = (e, id) => {
        dispatch(toggleTodo(id))
    }

    return (

        <>
            <div className="container">
                <h1 className="main-title">
                    My todo list
                </h1>
                <TodoList items = {todos} onDeleteItem={onDeleteItem} onHandleComplete={onHandleComplete}/>
                <Form text = {text} onInputValueChange = {onInputValueChange} onHandleSubmit={onHandleSubmit} />
            </div>
        </>
    )
}

export default App;
