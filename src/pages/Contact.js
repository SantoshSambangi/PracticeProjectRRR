import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {removeTodo, addTodo} from "../pages/redux/todoSlice";
import { nanoid } from '@reduxjs/toolkit';

const Contact = () => {

  const data = useSelector((state)=> state.todos);
  const dispatch = useDispatch('');

      //console.log(data)

      const [formData,setFormData] = useState({title:"",desc:""});

      const handleInputs = (e)=>{
          setFormData({
            ...formData,[e.target.name]: e.target.value
          })
      }

      const handleTodoForm = (e) =>{
        e.preventDefault();
        const newData = {...formData, id: nanoid() }
        //console.log(formData)
        dispatch(addTodo(newData))
      };
  return (
    <div className='container'>

        <div className='todoForm'>
          <h1>Todo Form Data</h1>
          <br/>
            <form onSubmit={handleTodoForm}>
                <label>Title</label><br/>
                <input type='text' onChange={handleInputs} name='title' value={formData.title} />
                <br/>
                <label>Description</label><br/>
                <textarea name='desc' onChange={handleInputs} value={formData.desc}></textarea>
                <br/>
                <input type='submit'/>
            </form>

        </div>

        <div className='todos'>
              {
                data.length > 0 ?<div>
                  {
                    data.map((item,index)=> <div className='item' key={index}>
                      <h3>{item.title}</h3>
                      <h4>{item.desc}</h4>
                      <button onClick={()=> dispatch(removeTodo(item))}>Remove</button>
                    </div>)
                  }
                </div>: null
              }
        </div>
    </div>
  )
}

export default Contact