import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

const Home = () => {
   
    const info = useSelector((state) => state.data);
    const dispatch = useDispatch("")

  return (
    <div>

        <h1>Home Page</h1>
        <h3>counter : {info.counterOne}</h3>
        <button onClick={() => dispatch(increment())} >increment</button> &nbsp;
        <button onClick={()=> dispatch(decrement())}>decrement</button>


    </div>
  )
}

export default Home;