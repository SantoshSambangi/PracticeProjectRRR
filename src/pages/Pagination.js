import React, { useEffect } from 'react';
import axios from 'axios';
import { useState, useEff } from 'react';
import styles from './paginasation.module.css';
import DisplayPages from './DisplayPages';

const Pagination = () => {

    const [data, setData] = useState([]);

    const [perpage, setPerpage] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {setData(res.data); setPerpage(res.data.slice(0,10));})
    },[])

    const pageHandler = (pageNumbers) =>{
        setPerpage(data.slice((pageNumbers*10)-10,pageNumbers*10))
    }
    //console.log(data)
  return (
    <div>
        <center>
        <h1>Pagination</h1>

        {
            data.length > 1 ? 
            <div>
                {
                    perpage.map(post => <div className={styles.pageStyles}>{post.title}</div> )
                }
                <br/>
                <DisplayPages  data={data} pageHandler={pageHandler}/>
            </div> 
            : null
        }
        </center>
    </div>
  )
}

export default Pagination