import React from 'react';
import banner from '../assets/images/Bannerimage.webp';
import styles from './navbar.module.css';

const BannerPage = () => {
  return (
    <div className={styles.banner}>

        <img src={banner}/>
    </div>
  )
}

export default BannerPage