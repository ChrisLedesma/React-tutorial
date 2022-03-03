import React, { Component } from "react";
import Todos from "./todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "pet da cat" },
      { id: 2, content: "pet da dog" },
    ],
  };
  deleteTodo = (id) => {
    //filter/remove any data with same id as selected
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    //set updated array
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center pink-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo />
      </div>
    );
  }
}

export default App;
