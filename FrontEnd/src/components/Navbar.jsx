import { useState } from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import kotaGreen from "../assets/kotaGreen.svg"
import hamburger from "../assets/hamburger.svg"



// Functional component for the Navbar
const Navbar = () => {
  // State to manage the active link
  // const [activeLink, setActiveLink] = useState('Home');

  // // Function to handle click on a link and update activeLink state
  // const handleLinkClick = (link) => {
  //   setActiveLink(link);
  // };

  return (
    <>
    <div className='flex justify-between navbar h-52'>
    <img src={kotaGreen} alt="logo" width={550} className='ml-20 p-10'/>
        {/* <nav className="flex">
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
        </nav> */}
        <img src={hamburger} alt="menu"className='mr-20 mt-10' width={100}/>
      </div>
    </>
  )
};

export default Navbar;
