import React from "react";
import './Form.css';

function Form ({onHandleSubmit, text, onInputValueChange}) {
        return (
            <form className='form' onSubmit={onHandleSubmit}>
                <input className='form-input'
                    type = 'text'
                    value = {text}
                    onChange = {onInputValueChange}
                />
                <button className='form-button'>
                    Add task
                </button>
            </form>
        );
}

export default Form;