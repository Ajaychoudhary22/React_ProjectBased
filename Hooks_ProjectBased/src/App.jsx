
// import React, { useState } from 'react'

// const App = () => {

//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [users, setUsers] = useState([]);

//   const handlesubmit = (e) => {
//     e.preventDefault();
// // ye way binding hai iski help se ham form data ko handle kar sakte hai
//     // ✅ validation sabse pehle
//     if (name.trim() === '' || age.trim() === '') {
//       alert("Please fill the data");
//       return;
//     }

//     const newUser = { name, age };
//     setUsers([...users, newUser]);

//     // clear inputs
//     setName('');
//     setAge('');
//   }

//   // ✅ delete handler fixed
//   const handleDelete = (index) => {
//     const updatedUsers = users.filter((_, i) => i !== index);
//     setUsers(updatedUsers);
//   }

//   return (
//     <>
//       <form onSubmit={handlesubmit}>
//         <input
//           type="text"
//           placeholder="Enter your full name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="number"
//           placeholder="age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />

//         <button>submit</button>
//       </form>

//       <hr />

//       {users.map((curUser, index) => (
//         <div key={index}>
//           <h2>{curUser.name}</h2>
//           <h3>{curUser.age}</h3>
//           <button onClick={() => handleDelete(index)}>Delete</button>
//         </div>
//       ))}
//     </>
//   )
// }

// export default App;


//TODO LIST APP

import React, { useState } from 'react'

import CreateTodo from './components/createTodo';
import ReadTodo from './components/ReadTodo';

const App = () => {
   const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React' , iscompleted: false},
   ]);
  
    

  return (
<div>
<CreateTodo todos={todos} setTodos={setTodos}/>
<ReadTodo todos={todos} setTodos={setTodos}/>
</div>
   );
};


 

export default App
