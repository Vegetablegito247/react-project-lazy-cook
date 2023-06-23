import React, { useState } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BsInstagram, BsGithub, BsFacebook, BsTwitter, BsTelegram } from 'react-icons/bs';
import './styles/navbar.css';

function Navbar() {
  const [openSideBar, setSidebar] = useState(false);

  const openModal = () => {
    setSidebar(!openSideBar);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <h3>Lazy Cook</h3>
        <FaUtensils className='uten' />
      </div>
      <ul className={openSideBar ? 'nav-menu active' : 'nav-menu'}>
        <div className="close" onClick={openModal}>
          <AiFillCloseSquare className='x-mark' />
        </div>
        <li>Home</li>
        <li>About us</li>
        <li>Our Chefs</li>
        <li>Request</li>
        <li>Contact us</li>
        <ul className='nav-icons'>
          <li><BsFacebook /></li>
          <li><BsInstagram /></li>
          <li><BsGithub /></li>
          <li><BsTwitter /></li>
          <li><BsTelegram /></li>
        </ul>
      </ul>

      <div className="burges" onClick={openModal}>
        <GiHamburgerMenu className='burg' />
      </div>
    </nav>
  )
}

export default Navbar