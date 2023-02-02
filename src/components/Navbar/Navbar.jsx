import React, { useState } from "react";
import "./index.css";
import logo from "./assets/bloxskins-logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { CartWidget } from "../Cart/CartWidget";

const Navbar = () => {
  let [showNav, setShowNav] = useState(false);

  let Links = [
    { name: "PISTOLS", link: "/" },
    { name: "RIFLES", link: "/" },
    { name: "SMGs", link: "/" },
    { name: "HEAVY", link: "/" },
    { name: "KNIVES", link: "/" },
  ];

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (

    <header>
      <nav className="h-20 flex flex-row justify-between sm:mx-8 items-center">

        <div>
          <img className="w-40 h-auto cursor-pointer" src={logo} alt="bloxSkins logo" />
        </div>

        <ul className={`navigation-ul ${showNav ? 'visible' : 'hidden'}`}>
          {
            Links.map((link)=> (
              <li key={link.name}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))
          }
        </ul>

        <div className="flex flex-row items-center gap-2">
          
            <CartWidget/>

            <span onClick={toggleNav}>
              <Hamburger color="#FFF" size={26} />
            </span>
          </div>

      </nav>
    </header>

  )

}

export default Navbar; 