import React from "react";

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.onHandleSubmit}>
                <input
                    type = 'text'
                    value = {this.props.text}
                    onChange = {this.onInputValueChange}
                />
                <button>
                    Add task
                </button>
            </form>
        );
    }
}

export default Form;