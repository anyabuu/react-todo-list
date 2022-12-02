import React from "react";
import './TodoList.css'


class TodoList extends React.Component {
    render() {
        return (
            <ol className="list">
                {this.props.items.map(item => (
                    <li onClick={this.onHandleComplete} className='item' key={item.id}>{item.text}</li>
                ))}
            </ol>
        );
    }
}

export default TodoList;