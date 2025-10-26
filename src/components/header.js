import React from 'react'
import logo from '../images/logo.jpg'
import '../components/styles/header.css'

const Header = () => {
  return (
    <div className='text-center  header  p-2 rounded w-100'>
      <img src={logo} alt="Logo" className='rounded-circle ' />
        <h1 className='display-3 fw-bold text-white text'>Hamere Birhan</h1>
    </div>
  )
}

export default Header