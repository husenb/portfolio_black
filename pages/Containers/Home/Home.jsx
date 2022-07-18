import React from 'react'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.Home__heading1}>
        <p>
          Husen <span> Basnet</span>
        </p>
      </div>
      <div className={styles.Home__heading2}>
        <p >
           I am a Creative <span> Web Developer </span> 
        </p>
     
      </div>
      <button className={styles.Home__button}>
        Get in Touch
      </button>

    </div>
  )
}

export default Home