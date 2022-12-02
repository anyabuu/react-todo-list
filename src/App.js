import React from "react";
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";

class App extends React.Component {

  state = {
      items: [],
      text: '' ,
      done: false
  };


    onInputValueChange = (e) => {
        this.setState({ text: e.target.value });
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState({
            items: [...this.state.items, newItem],
            text: ''
        });
    }

    // onHandleComplete = (e) => {
    //     console.log(e)
    //     console.log(this)
    //     console.log(this.state)
    //     this.setState({
    //        done: !this.state.done
    //     })
    //     console.log(this.state)
    // }


  render() {
    return (
        <>
            <div className="container">
                <h1 className="main-title">
                    My todo list
                </h1>
                {/*<ol className="list">*/}
                {/*    {this.state.items.map(item => (*/}
                {/*        <li onClick={this.onHandleComplete} className='item' key={item.id}>{item.text}</li>*/}
                {/*    ))}*/}
                {/*</ol>*/}
                <TodoList items = {this.state.items}/>
                <form className="form" onSubmit={this.onHandleSubmit}>
                    <input className="form-input"
                        type = 'text'
                        onChange = {this.onInputValueChange}
                        value = {this.state.text}
                    />
                    <button className='form-button'>
                        Add task
                    </button>
                </form>
                {/*<Form text = {this.state.text}/>*/}
            </div>
        </>
    )
  }
}


export default App;
