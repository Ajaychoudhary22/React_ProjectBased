import React, { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import ReadTodo from './components/ReadTodo'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", iscompleted: false },
  ])

  return (
    <div className="
      w-screen h-screen flex flex-col justify-center items-center
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700
    ">
      <CreateTodo todos={todos} setTodos={setTodos} />
      <ReadTodo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
