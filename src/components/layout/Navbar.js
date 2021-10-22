import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <h1 className='navbar-brand'>{title}</h1>
        <ul className='navbar-nav'>
          <li className='nav-link'>
            <Link
              to='/orders'
              className='nav-item text-light text-decoration-none'
            >
              View Order Schedule
            </Link>
          </li>
          <li className='nav-link'>
            <Link to='/' className='nav-item text-light text-decoration-none'>
              View Flight Schedule
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Transport.ly',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
