import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav id="nav" className="navbar navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand" to="/">
            <i className="fa fa-headphones-alt faa-float animated faa-fast"></i> Songs <span>Hunter</span>
        </Link>
            <Link className="navbar-brand" to="/about">
                <i className="fas fa-info-circle"></i>
            </Link>
    </nav>
  );
}

export default Nav;
