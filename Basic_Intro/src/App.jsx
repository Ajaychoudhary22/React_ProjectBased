import React, { useState } from 'react'

// const App = () => {
//   //yha hamesha logic likhna hai
//   return (
//     //or yha hamesa jsx likhna hai
//     <div>   
//     </div> 
//   )
// }
// export default App



// const handelClick = () => {
//   alert('button clicked')
// }
// if a function is paramertized function 



// const App = () => {
  
//     const parahandler =(msg)=>{
//       alert(msg)
//     }
    
// // ham ye ek auto wrapper class bana kr bhi kr sakte hai
//     // const wrapper =()=>parahandler("Diye bhuj gye raat ho gayi")
    
// return (
//     <>
//     // yha ham direct bi accces kr sakte hai
//     <button onClick={()=>parahandler("Diye bhuj gye raat ho gayi")} >clcik</button> 
//     <h3>
    
//     </h3>
//     </>
//   )
// }

// export default App



// Array of objectjs koham directly screen pr nh dikha skate isliye ham unko 

// const App = () => {
//   const profiles = [
//   {
//     name : "shubham",
//     age : 22
//   },
//   {
//     name : "sumit",
//     age : 23
//   },
// ]

// const upadtedate = profiles.map((profile,index)=>{
//   return (
//   <li key={index}>
//     <span>{profile.name}</span><br/>
//     <small>age:{profile.age}</small>
//   </li>
//   )
// });

//   return (
//     <ul>
//       {upadtedate}
//     </ul>
//   )
// }

// export default App




import React, { useState } from 'react'

const App = () => {
  // usestate is the read only vaible like username ek read only variable h
  // or setusername ek write only variable
  const [username, setUsername] = useState("shubham")

  const changeHandler = () => {
    setUsername(username === "shubham" ? "sumit  " : "shubham")
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold underline text-gray-400">
        {username}
      </h1>

      <button
        className="bg-red-500 rounded-full overflow-hidden ml-4 px-4 py-2 text-white"
        onClick={changeHandler}
      >
        change name
      </button>
    </div>
  )
}

export default App