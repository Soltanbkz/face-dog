import React from 'react';
import c from './Navbar.module.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { FaUser, FaVideo, FaEnvelope, FaCog } from 'react-icons/fa';

const Navbar = () => {
    return(
        <nav className={c.nav}>
        <div className={c.item}>
          <NavLink to='/' className = { navData => navData.isActive ? c.active : c.item }><FaUser/>  Profile</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to='/dialogs' className = { navData => navData.isActive ? c.active : c.item }><FaEnvelope/>   Messages</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to='/music' className = { navData => navData.isActive ? c.active : c.item }><FaVideo/>  Video</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to='/settings' className = { navData => navData.isActive ? c.active : c.item }><FaCog/>  Settings</NavLink>
        </div>
      </nav>
    );
}
export default Navbar