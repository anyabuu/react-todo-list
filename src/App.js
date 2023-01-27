import React, {useState} from "react";
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";

function App() {

    const [items, setItems] = useState([])
    const [text, setText] = useState('')

    const onInputValueChange = (e) => {
        setText(e.target.value);
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }
        const newItem = {
            text: text,
            id: Date.now(),
            done: false
        };

        setItems([...items, newItem]);
        setText('')
    }

    const onHandleComplete = (e, id) => {
        e.currentTarget.classList.toggle('crossed')
        const newStateArr = items.map((obj)=>{
            if (obj.id === id){
                return {...obj, done: !obj.done}
            }
            return obj
        })
        setItems(newStateArr)
    }

    return (
        <>
            <div className="container">
                <h1 className="main-title">
                    My todo list
                </h1>
                <TodoList items = {items} onHandleComplete = {onHandleComplete}/>
                <Form text = {text} onInputValueChange = {onInputValueChange} onHandleSubmit = {onHandleSubmit} />
            </div>
        </>
    )
}

export default App;
