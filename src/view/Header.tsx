import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header-bar">
            <div className="logo">MyWeatherApp</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Contact</li>
            </ul>
        </header>
    );
}

export default Header;
