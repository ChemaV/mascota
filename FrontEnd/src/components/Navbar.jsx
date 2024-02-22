<<<<<<< HEAD
// Import necessary dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import kotaGreen from "../assets/kotaGreen.svg"
||||||| 7a03bbc
const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}
=======
const Navbar = () => {
  return (
    <div>


      
    </div>
  )
}
>>>>>>> origin/dev

// Functional component for the Navbar
const Navbar = () => {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState('Home');

  // Function to handle click on a link and update activeLink state
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
    <img src={kotaGreen} alt="" />
      <nav className="flex flex-row text-red-500">
        <ul>
          <li className={activeLink === 'Home' ? 'active' : ''}>
            <Link to="/home" onClick={() => handleLinkClick('Home')}>Home</Link>
          </li>
          <li className={activeLink === 'Products' ? 'active' : ''}>
            <Link to="/home/products" onClick={() => handleLinkClick('Products')}>Products</Link>
          </li>
          <li className={activeLink === 'Services' ? 'active' : ''}>
            <Link to="/home/services" onClick={() => handleLinkClick('Services')}>Services</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Navbar;
