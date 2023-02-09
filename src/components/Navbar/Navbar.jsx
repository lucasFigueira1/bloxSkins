import React, { useState } from 'react'
import './index.css'
import logo from './assets/bloxskins-logo.png'
import { Squash as Hamburger } from 'hamburger-react'
import { CartWidget } from '../Cart/CartWidget'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const Links = [
    { name: 'USP-S', link: '/' },
    { name: 'AK-47', link: '/' },
    { name: 'AWP', link: '/' },
    { name: 'Desert Eagle', link: '/' },
    { name: 'M4A1-S', link: '/' }
  ]

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (

    <header>
      <nav className='container mx-auto h-20 flex flex-row justify-between items-center'>

        <div>
          <img className='w-40 h-auto cursor-pointer' src={logo} alt='bloxSkins logo' />
        </div>

        <ul className={`navigation-ul ${showNav ? 'visible' : 'hidden'}`}>
          {
            Links.map((link) => (
              <li key={link.name}>
                <a className='font-semibold' href={link.link}>{link.name}</a>
              </li>
            ))
          }
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
