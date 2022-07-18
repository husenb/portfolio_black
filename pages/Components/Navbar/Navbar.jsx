import React from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
    <div className={styles.Navbar__logo}>
      <h1>Hussu<span>7</span></h1>
    </div>
    <div className={styles.Navbar__links}>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      </ul>
      {/* <ul>
        {
          ['home', 'about', 'Portfolio', 'Contact'].map((item) => (
            <li key={`link-${item}`}>
                <Link  href={`/${item}`}><a>{item}</a></Link>
              
            </li>))
        }
      </ul>  */}
    </div>
  </nav>
  )
}

export default Navbar