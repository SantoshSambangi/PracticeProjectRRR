import { useEffect, useState } from "react"
import React from 'react';
import loaderimg from '../assets/images/loader.gif';

const CovidActive = () => {

    const [data , setData] = useState([]);
    const [loader, setLoader] = useState(false)

    
    useEffect(() => {
        setLoader(true);
        fetch('https://data.covid19india.org/data.json').then(res => res.json()).then(jsondata => setData(jsondata.statewise)).catch();
    },[])
    console.log(data)
  return (
    <div>
        <center>
            <h1>COVID PATIENTS STATE WISE DATA</h1>

            {
                loader ? <img src={loaderimg} height={70}/> : null 
            }
            
            <table className="table" border={1}>
                <thead className="thead">
                        <tr>
                            <td>SR.NO</td>
                            <td>STATE</td>
                            <td>CONFIRMED</td>
                            <td>RECOVERED</td>
                            <td>DEATH</td>
                            <td>ACTIVE</td>
                            <td>LATEST UPDATE</td>
                        </tr>
                </thead>
                <tbody className="tbody">
                   {
                    data.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.state}</td>
                                <td>{item.confirmed}</td>
                                <td>{item.recovered}</td>
                                <td>{item.deaths}</td>
                                <td>{item.active}</td>
                                <td>{item.lastupdatedtime}</td>
                            </tr>
                        )
                    })
                   }
                </tbody>

            </table>

           

        </center>
    </div>
  )
}

export default CovidActive