
import CreateTodo from './components/CreateTodo'
import ReadTodo from './components/ReadTodo'

const App = () => {
  

  return (
    <div className="
      w-screen h-screen flex flex-col justify-center items-center
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700
    ">
      <CreateTodo  />
      <ReadTodo  />
    </div>
  )
}

export default App
