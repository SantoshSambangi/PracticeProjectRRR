import { createSlice } from "@reduxjs/toolkit";

var ideal = 0

const counterSlice = createSlice({
    name: "counter",
    initialState : {counterOne : 0},
    reducers:{
        increment: (state,action)=>{
            state.counterOne = state.counterOne + 1
        },
        decrement: (state,action)=>{
            state.counterOne = state.counterOne - 1
        },

        reset : (state,action)=>{
            state.counterOne = ideal
        }
    }


})
export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;