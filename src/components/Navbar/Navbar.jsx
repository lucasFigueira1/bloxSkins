import React, { useState } from 'react'
import './index.css'
import logo from './assets/bloxskins-logo.png'
import { Squash as Hamburger } from 'hamburger-react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <header>
      <nav className='container mx-auto h-20 flex flex-row justify-between items-center mb-8'>

        <div>
          <Link to='/'>
            <img className='w-40 h-auto cursor-pointer' src={logo} alt='bloxSkins logo' />
          </Link>
        </div>

        <ul className={`navigation-ul ${showNav ? 'visible' : 'hidden'}`}>
          <li>
            <Link to='/category/USP-S'>USP-S</Link>
          </li>
          <li>
            <Link to='/category/AK-47'>AK-47</Link>
          </li>
          <li>
            <Link to='/category/AWP'>AWP</Link>
          </li>
          <li>
            <Link to='/category/Desert Eagle'>Desert Eagle</Link>
          </li>
          <li>
            <Link to='/category/M4A1-S'>M4A1-S</Link>
          </li>
        </ul>

        <div className='flex flex-row items-center gap-2'>

          <CartWidget />

          <span onClick={toggleNav}>
            <Hamburger color='#FFF' size={26} />
          </span>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
