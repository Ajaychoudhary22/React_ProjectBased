import React, { useState } from 'react'
import styles from './Read.module.css';

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
          
      <h1 className={styles.read_list_heading}>Todo List</h1>
    
      <hr />
      <ol>{renderTodos()}</ol>
    </div>
  )
}

export default ReadTodo


 