// Menu.js

import React from "react";
import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu() {

    return (
        <nav id="menu">
            <div className="menu-item">
                <Link to="/">HOME</Link>
            </div>
            <div className="menu-item">
                <Link to="/Community">COMMUNITY</Link>
            </div>
            <div className="menu-item">
                <Link to="/Information">INFOMATION</Link>
            </div>
            <div id="loginheader">
            <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}

