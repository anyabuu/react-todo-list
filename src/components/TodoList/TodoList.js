import React from "react";
import './TodoList.css'
import ListElement from "../ListElement/ListElement";

function TodoList ({items, onHandleComplete}) {
        return (
            <ol className="list">
                {items.map((item) => (
                    <ListElement key={crypto.randomUUID()} done={item.done} item={item} onHandleComplete={(e) => onHandleComplete(e, item.id)}/>
                ))}
            </ol>
        );
}

export default TodoList;