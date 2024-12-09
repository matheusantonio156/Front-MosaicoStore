import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../images/icones/logo.png';
import ajuda from '../images/icones/ajudaazul 1.png';
import perfil from '../images/icones/Group 159.png';
import notificacao from '../images/icones/Group 173.png';
import NotificationModal from './NotificationModal.jsx';
import '../data/script.js'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo coqueiral" className="logo" />
      <div className="nav-icon-container">
        <Link to= "/Help">
         <img src={ajuda} alt="ajuda" className="ajuda" />
        </Link>
       
        <Link to = "/settings">
        <img src={perfil} alt="perfil" className="perfil" /> 
        </Link>
        <NotificationModal notificacao={notificacao} />
        <button id="menuBtn" className="menu-button" onClick={toggleMenu}>
        <IoMenu className='dropDownNavbar'/>
        </button>
      </div>
      <div className={`header-inner-content ${menuOpen ? 'show-menu' : ''}`}>
        <nav>
          <ul>
           <Link to = "/Home">
           <li>INÍCIO</li> 
           </Link>
            <li> - </li>
            <Link to = "/About">
            <li>SOBRE</li> 
            </Link>
            <li> - </li>
            <Link to= "/Etica">
            <li>ÉTICA</li> 
            </Link>
            <li> - </li>
            <Link to = "/Divulgue">
            <li>DIVULGAR NA MOSAICO</li> 
            </Link>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
