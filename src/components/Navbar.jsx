import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseSquare } from 'react-icons/ai';
import './styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>Lazy Cook</h3>
        <FaUtensils className='uten' />
      </div>
      <ul>
        <div className="close">
          <AiFillCloseSquare className='x-mark' />
        </div>
        <li>Home</li>
        <li>About us</li>
        <li>Our Chefs</li>
        <li>Request</li>
        <li>Contact us</li>
      </ul>

      <div className="burges">
        <GiHamburgerMenu className='burg'/>
      </div>
    </nav>
  )
}

export default Navbar