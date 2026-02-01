import React, { createContext, useState } from "react";

export const creatTodo = createContext(null);

const Wrapper = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", iscompleted: false },
  ]);

  return (
    <creatTodo.Provider value={[todos, setTodos]}>
      {props.children}
    </creatTodo.Provider>
  );
};

export default Wrapper;
