import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  //check if there is content or not
  const todoList = todos.length ? (
    //cycle through todo list
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id);}}>
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">Nothing to do!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
