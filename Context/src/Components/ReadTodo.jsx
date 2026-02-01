import React from 'react'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { creatTodo } from './Wrapper'

const ReadTodo = () => {
  const  [todos, setTodos] =useContext(creatTodo);

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
    toast.error("todo deleted");
  } 

  return (   
    <div className="
      w-[20%] min-w-[250px]
      bg-gray-800 p-4 rounded-xl shadow-lg
    ">
      <h1 className="text-xl font-bold mb-4 text-white text-center">
        Todo List
      </h1>

      <ol className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="
              bg-gray-700 text-white px-4 py-2 rounded-lg
              flex justify-between items-center
            "
          >
            <span>{todo.title}</span>

            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-400 font-bold"
            >
              ✕
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ReadTodo
