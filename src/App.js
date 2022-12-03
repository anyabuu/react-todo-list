import React from "react";
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";

class App extends React.Component {

  state = {
      items: [],
      text: '' ,
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
            id: Date.now(),
            done: false
        };
        this.setState({
            items: [...this.state.items, newItem],
            text: ''
        });
    }

    onHandleComplete = (e, id) => {

        e.currentTarget.classList.toggle('crossed')

        const newStateArr = this.state.items.map((obj)=>{
            if (obj.id === id){
                return {...obj, done: !obj.done}
            }

            return obj
        })

        this.setState({
            items: newStateArr,
        })


        console.log(this.state)
    }


  render() {
    return (
        <>
            <div className="container">
                <h1 className="main-title">
                    My todo list
                </h1>
                <TodoList items = {this.state.items} onHandleComplete = {this.onHandleComplete}/>
                <Form text = {this.state.text} onInputValueChange = {this.onInputValueChange} onHandleSubmit = {this.onHandleSubmit} />
            </div>
        </>
    )
  }
}


export default App;
