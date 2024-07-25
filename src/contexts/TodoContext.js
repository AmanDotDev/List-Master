// import { createContext , useContext } from "react";

// export const TodoContext = createContext({
//     // todos:[{
//     //     id : 1,
//     //     todo:"hello",
//     //     completed : true
//     // }],
//     addTodo :(todo)=>{} ,
//     updateTodo :(id,todo)=>{},
//     deleteTodo :(id)=>{},
//     toggleCompleted:(id)=>{}
// })

// export const useTodo =()=>{
//     return useContext(TodoContext)
// }

// export const TodoProvider = TodoContext.Provider


import { createContext, useContext } from "react";

export const TodoContext = createContext({
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
