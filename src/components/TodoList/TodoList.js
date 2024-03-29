import React from "react";
import './TodoList.css'
import ListElement from "../ListElement/ListElement";

function TodoList ({items, onHandleComplete, onDeleteItem}) {
        return (
            <ol className="list">
                {items.map((item) => (
                    <ListElement key={crypto.randomUUID()} done={item.done} item={item} onHandleComplete={(e) => onHandleComplete(e, item.id)} onDeleteItem={(e) => onDeleteItem(e, item.id)}/>
                ))}
            </ol>
        );
}

export default TodoList;