import React from "react";
import './TodoList.css'

class TodoList extends React.Component {
    render() {
        return (
            <ol className="list">
                {this.props.items.map(item => (
                    <li onClick={(e) => this.props.onHandleComplete(e, item.id)} className='item' key={item.id}>{item.text}</li>
                ))}
            </ol>
        );
    }
}

export default TodoList;