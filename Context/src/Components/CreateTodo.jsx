import React, { useContext } from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify"  
import { creatTodo } from './Wrapper'


const CreateTodo = () => {
  
  const  [todos, setTodos] =useContext(creatTodo)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const handlesubmits = (data) => {
    const newTodo = {
      ...data,
      id: nanoid(),
      iscompleted: false
    }

    setTodos([...todos, newTodo])
toast.success("Todo is created") 

    reset() 
  }

  return (
    <div className="
      w-[80%] max-w-md mb-10 p-6
      bg-gray-800 rounded-xl shadow-lg
      animate-fadeIn
    ">
      <h1 className="text-2xl font-bold text-white text-center mb-6">
        Set <span className="text-blue-500 animate-pulse">Reminder</span>
        <br /> for Task
      </h1>

      <form onSubmit={handleSubmit(handlesubmits)} className="text-center">
        <input
          className="
            w-full mb-4 px-4 py-2
            bg-transparent text-white
            border-b border-gray-400
            outline-none
            transition-all duration-300
            focus:border-blue-500 focus:scale-105
          "
          {...register("title", { required: "Title cannot be empty" })}
          type="text"
          placeholder="Enter task..."
        />

        <br />
      <small className='font-bold text-white'>{errors?.title?.message}</small>

        <button
          className="
            bg-blue-500 text-white px-6 py-2 rounded-full
            transition-all duration-300
            hover:bg-blue-600 hover:scale-110
            active:scale-95
          "
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default CreateTodo
