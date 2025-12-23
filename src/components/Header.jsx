import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          Mobirep
        </Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Accueil</NavLink>
          <NavLink to="/repair" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Réparation</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Boutique</NavLink>
          <NavLink to="/locate" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Trouvez-nous</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
        </nav>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
