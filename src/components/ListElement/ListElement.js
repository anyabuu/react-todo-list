import React from 'react';

function ListElement({item, onHandleComplete, done}) {
    return (
        <li className={done ? "crossed" : ""} onClick={onHandleComplete}>
            {item.text}
        </li>
    );
}

export default ListElement;