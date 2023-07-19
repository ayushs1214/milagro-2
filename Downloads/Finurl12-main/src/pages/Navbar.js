import React from 'react';
import { menuItems } from "./prod";
import MenuItems from "./MenuItems";
import { Link } from 'react-router-dom';
import './Navbar.css';
import finurl from '../images/finurl.png';
import { Button } from './Button';
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='./Home' className='navbar-logo'  >
      <img
          src={finurl}
          alt="FinURL"
          style={{ width: "30%", height: "20%", margintop: "3%", paddingTop: "2%"}}
        />
        </Link>
        
      <ul className=" nav-menu">
      
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        } )}
<Button />

      </ul>
    
    </nav>
  );
};

export default Navbar;