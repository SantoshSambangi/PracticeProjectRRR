import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from '../assets/images/birdlogo.avif';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {

      const [toggle, setToggle] = useState(true);

      const handler = ()=>{
         setToggle(!toggle)
      }
      
  return (
    <div className={styles.navContainer}>
        <header className={styles.header}>

                <div className={styles.logo}>
                        <img src={logo} height={70} width={70}/>
                </div>

                <ul className={styles.navLinks}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                </ul>

                <div className={styles.bars} onClick={handler}>
                    {
                      toggle ? <FaBars size={40}/> : <AiOutlineClose size={40}/>
                    }
                </div>
        </header>

              <ul className={toggle ? styles.myMobile : styles.mobilenavLinks} >
                    <li><Link to='/' onClick={()=>{setToggle(true)}}>Home</Link></li>
                    <li><Link to='/about' onClick={()=>{setToggle(true)}}>About</Link></li>
                    <li><Link to='/contact' onClick={()=>{setToggle(true)}}>Contact</Link></li>
                    <li><Link to='/services' onClick={()=>{setToggle(true)}}>Services</Link></li>
              </ul>
              
    </div>
  )
}

export default NavBar