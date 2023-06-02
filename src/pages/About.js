import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from './redux/counterSlice';

const About = () => {

  const info = useSelector((state)=> state.data);
  const dispatch = useDispatch("")

  return (
    <div>
        <h1>About Page</h1>
        <h1>counter : {info.counterOne}</h1>
        <button onClick={()=> dispatch(reset())}>Reset</button>

    </div>
  )
}

export default About;