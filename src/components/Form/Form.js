import React from "react";
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <form className='form' onSubmit={this.props.onHandleSubmit}>
                <input className='form-input'
                    type = 'text'
                    value = {this.props.text}
                    onChange = {this.props.onInputValueChange}
                />
                <button className='form-button'>
                    Add task
                </button>
            </form>
        );
    }
}

export default Form;