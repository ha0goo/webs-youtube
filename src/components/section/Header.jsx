import React from 'react'

import { useLocation } from 'react-router-dom';
import Menu from '../header/Menu';
import Sns from '../header/Sns';
import Logo from '../header/Logo';


const Header = () => {

  const location = useLocation();
  console.log(location)
  

  return (
    <header id='header' role='banner'>
      <Logo/>
      <Menu/>
      <Sns/>
      </header>
  )
}

export default Header;