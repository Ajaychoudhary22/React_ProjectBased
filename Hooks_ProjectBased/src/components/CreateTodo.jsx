import React, { useState } from 'react'
import { nanoid } from 'nanoid';


const createTodo = (props) => {
    const todos = props.todos;
    const setTodos = props.setTodos;
     const [title, setTitle] = useState('');
    const handlesubmit =(e)=>{
    e.preventDefault();
    if(title.trim() ===''){
      alert("Please enter task");
      return;
    }
  const newTodo = {
    id:nanoid(),
    title:title,
    iscompleted:false,


   };
    setTodos([...todos,newTodo]);
    setTitle('');

    };
    

  return (
    <div>
        <form onSubmit={handlesubmit }>
      <input onChange={(e) => setTitle(e.target.value )} type="text" value={title} placeholder='enter task' />
      <br />
    
      <button  >Add Todo</button>
     
      </form>
    </div>
  )
}

export default createTodo
