import React from 'react';
import './ListElement.css';

function ListElement({item, onHandleComplete, done, onDeleteItem}) {
    return (
        <div>
            <li className={done ? "crossed" : "list-item"} onClick={onHandleComplete}>
                {item.text}
            </li>
            <button className='list-button' onClick={onDeleteItem}>
                Delete
            </button>
        </div>
    );
}

export default ListElement;