import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header-bar">
            <div className="logo">MyWeatherApp</div>
            <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
            </ul>
        </header>
    );
}

export default Header;
