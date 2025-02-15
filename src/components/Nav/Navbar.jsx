import logo from './shared/logo.svg';
import hamburger from './shared/icon-hamburger.svg';
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material'
import { useState } from 'react';

export default function Navbar({whereTo0, whereTo1,whereTo2,whereTo3})  {

  const navigate = useNavigate()
  const [toggleNav, setToggleNav] = useState(false)

    return (
        <header>
          <a href='#'><img src={logo} alt='star-icon' /></a>
          <Button variant='text' onClick={() => setToggleNav(!toggleNav)}><img src={hamburger}  alt=''  /></Button>
          <nav className={toggleNav ? 'nav-container active' : 'nav-container'}>
              <ul>
                <li className={whereTo0} onClick={() => navigate('/home')}><a href='#'> <strong className='num'>00</strong> <span className='title'>Home</span> </a></li>
                <li className={whereTo1} onClick={() => navigate('/destination')}><a href='#'><strong className='num'>01</strong><span className='title'>Destination</span></a></li>
                <li className={whereTo2} onClick={() => navigate('/crew')}><a href='#'><strong className='num'>02</strong><span className='title'>Crew</span></a></li>
                <li className={whereTo3} onClick={() => navigate('/tecnhology')}><a href='#'><strong className='num'>03</strong><span className='title'>Tecnhology</span></a></li>
              </ul>
          </nav>
        </header>
    ) 
}