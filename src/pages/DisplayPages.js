import React from 'react';
import styles from './paginasation.module.css'

const DisplayPages = ({data,pageHandler}) => {

    let pageNumbers = [];

    for(let i=1; i < Math.ceil(data.length/10)+1 ; i++){

        pageNumbers.push(i)
    }

  return (

    <div>

        <center>
            {
                pageNumbers.map(page => <div className={styles.pageNumbers} onClick={()=>{pageHandler(page)}}>{page}</div>)
            }

        </center>
    </div>
  )
}

export default DisplayPages