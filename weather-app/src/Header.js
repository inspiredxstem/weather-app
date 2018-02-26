import React from 'react'
import logo from './logo.svg'

const Header = (props) => {
  return (
    <header className='App-header'>
      <img src={logo} alt='React logo' className='App-logo'></img>
      <h1 className='app-title'>{props.title}</h1>
    </header>
  )
}

export default Header