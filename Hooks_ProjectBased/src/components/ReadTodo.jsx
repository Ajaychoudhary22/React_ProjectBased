import React, { useState } from 'react'

const ReadTodo = (props) => {
    const {todos, setTodos} = props;

      
const deleteTodo = (id) => {
      const upadtedTodos = todos.filter(todo=>todo.id !=id)
      setTodos(upadtedTodos);
    }


    const renderTodos = () => {
  return todos.map((todo) => (
    <li
      key={todo.id}
      onClick={() => deleteTodo(todo.id)}
      style={{ cursor: "pointer" }}
    >
      {todo.title}
    </li>
  ));
};
  return (
    <div>
          
      <h1>Todo List</h1>
    
      <hr />
      <ul>{renderTodos()}</ul>

   
  
    
    </div>
  )
}

export default ReadTodo
