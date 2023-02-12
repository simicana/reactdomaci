import React from 'react';
import logo from '../../ddt.png';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
    <Link className="navbar-brand ml-5" to="/">
        <img src={logo} alt="logo" style={{width:'250px'}}></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span>
        <i className="fas fa-bars" style= {{ color: '#000' }}></i>
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link className="nav-link active text-white text-uppercase ml-5" aria-current="page" to="/">Početna</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ml-5" to="/kontakt">Kontaktirajte nas</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
};
export default Navbar;