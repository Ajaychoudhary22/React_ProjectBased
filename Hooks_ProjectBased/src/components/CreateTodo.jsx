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
    <>
        <form onSubmit={handlesubmit }>
      <input className='border border-gray-300 rounded px-4 py-2 mr-2' onChange={(e) => setTitle(e.target.value )} type="text" value={title} placeholder='enter task' />
      <br />

      <button className='bg-blue-500 text-white px-4 py-2 rounded'  >Add Todo</button>

      </form>
    </>
  )
}

export default createTodo
