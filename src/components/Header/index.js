import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav className='header'>
      <div>
        <h1 className='header__title'>CRUD</h1>
      </div>
      <button className='button button--new'>
        <Link to={'/users/new'}>Add user</Link>
      </button>
    </nav>
  )
}

export default Header