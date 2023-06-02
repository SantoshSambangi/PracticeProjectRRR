import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
        reducer:{
            data : counterSlice,
            todos : todoSlice,
        }
})
export default store;