import React from 'react';
import './partials.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="navbar-items">
        <ResponsiveLink to="/dashboard">HOME</ResponsiveLink>
        <ResponsiveLink to="/tickets">ABOUT US</ResponsiveLink>
        <ResponsiveLink to="/">OUR SERVICES</ResponsiveLink>
        <ResponsiveLink to="/">TESTIMONIALS</ResponsiveLink>
        

      </div>

      <button className="btn-contact">CONTACT US</button>

      
    </nav>
  );
};

const ResponsiveLink = ({ to, children }) => {
  return (
    <Link to={to}>{children}</Link>
  );
};

export default Header;
