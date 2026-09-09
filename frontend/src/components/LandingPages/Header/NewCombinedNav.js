import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import './NewCombinedNav.css';

// 1. IMPORT GROUP 123.PNG FROM THE SAME DIRECTORY
import iitbhuLogo from './Group 123.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'E-Spardha', path: '/espardha' },
  { name: 'Contact us', path: '/contactus' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'Matches', path: '/matches' },
  { name: 'Register', path: '/register/signup' },
];

const token = localStorage.getItem('token');
const baseUrl = process.env.REACT_APP_BASE_URL;

export const Navbar = ({ onHamburgerClick }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      axios
        .get(`${baseUrl}auth/update/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log('error=', err);
        });
    }
  }, []);

  return (
    <div className="top-bar">
      {/* Left Main Logo */}
      <Link to="/" className="brand-logo">
        <img src="/images/logo/spardha-nav-black.svg" alt="Spardha Logo" className="logo" />
      </Link>

      {/* Center Navigation Links */}
      <nav className="navbar desktop-only">
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
          {user && (
            <li>
              <Link to="/dashboard/home">
                {user.name.split(' ')[0]}'s Dashboard
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Right Emblem Logo */}
      <div className="right-emblem desktop-only">
        <img 
          src={iitbhuLogo} 
          alt="IIT BHU Emblem" 
          className="emblem-logo" 
        />
      </div>

      {/* Mobile Hamburger Button */}
      <div className="hamburger-btn" onClick={onHamburgerClick}>
        <FaBars size={24} color="white" />
      </div>
    </div>
  );
};

export const Sidebar = ({ isOpen, onClose }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      axios
        .get(`${baseUrl}auth/update/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log('error=', err);
        });
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <>
      <div 
        className={`sidebar-backdrop ${isOpen ? 'active' : ''}`} 
        onClick={onClose} 
      />
      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={onClose}>
          <FaTimes size={24} color="white" />
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path} onClick={onClose}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
          {user && (
            <li onClick={onClose}>
              <Link to="/dashboard/home">
                {user.name.split(' ')[0]}'s Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};