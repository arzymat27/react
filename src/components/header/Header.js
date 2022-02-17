import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../header/Header.module.css'
import ModalW from '../UI/ModalW/ModalW.js'

const Header = () => {
  return (
    <section>
      <header className={s.menu}>
        <div className={s.menus}>
          <div><NavLink to='/'>Alma</NavLink></div>
          <ul className={s.menus2}>
            <li> <NavLink to="/getstarted">Get Started </NavLink></li>
            <li> <NavLink to="/howitworks">How It Works </NavLink></li>
            <li> <NavLink to="">For Providers </NavLink></li>
            <li> <NavLink to="">About Alma </NavLink></li>
            <button className={s.btn1}>Login</button>
            <button className={s.btn2}>Find a provider</button>
          </ul>
        </div>

        <div className={s.big}>
          <h1 >
            Alma makes it easy to find high <br></br>
            quality, affordable mental <br></br>
            health care.
          </h1>
          <button>Browse our directory</button>

        </div>
        <div className='modW'>
          <ModalW />
        </div>


      </header>

    </section>
  )
}

export default Header





