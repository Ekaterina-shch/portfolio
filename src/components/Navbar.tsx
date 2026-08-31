// src/components/Navbar.tsx
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Екатерина .dev{'/'}
      </NavLink>

      <button className="hamburger" onClick={toggleMenu} ref={buttonRef}>
        {isMenuOpen ? <IoCloseOutline /> : <HiOutlineMenuAlt3 />}
      </button>

      <ul
        className={`nav-links ${isMenuOpen ? 'open' : ''}`}
        ref={menuRef}
        onClick={() => setIsMenuOpen(false)}
      >
        <li className="menu-item">
          <NavLink to="/">Главная</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/about">Обо мне</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/skills">Навыки</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/projects">Проекты</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/contact">Контакты</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
