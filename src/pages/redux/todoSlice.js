import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        id:1,
        title: "Sambangi santosh",
        desc :" React Js Developer"
    },
    {
        id:2,
        title: "Sk sk",
        desc :" Node Js Developer"
    },
]

const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers:{

            removeTodo : (state,action) =>{
                console.log(state)
                console.log(action)
                return state.filter((item)=> item.id !== action.payload.id)
            },
            addTodo: (state,action)=>{
                state.push(action.payload)
            }
    }
});
export const {removeTodo, addTodo} = todoSlice.actions;
export default todoSlice.reducer;