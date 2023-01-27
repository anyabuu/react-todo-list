import React from "react";
import './TodoList.css'

function TodoList ({items, onHandleComplete}) {
        return (
            <ol className="list">
                {items.map(item => (
                    <li onClick={(e) => onHandleComplete(e, item.id)} className='item' key={item.id}>{item.text}</li>
                ))}
            </ol>
        );
}

export default TodoList;