import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.links}>
        {' '}
        <Link className={classes.link} to='/main'>
          Главная
        </Link>
        <Link className={classes.link} to='/products'>
          Товары
        </Link>
        <Link className={classes.link} to='/about'>
          О Приложении
        </Link>
      </div>

      <div className={classes.login}>
        <button>Авторизоваться</button>
      </div>
    </div>
  )
}

export default NavBar
