// Menu.js

import React from "react";
import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu() {

    return (
        <nav id="menu">
            <div className="menu-item">
                <Link to="/LoginedMain">HOME</Link>
            </div>
            <div className="menu-item">
                <Link to="/LoginedCommunity">COMMUNITY</Link>
            </div>
            <div className="menu-item">
                <Link to="/LofinedInformation">INFOMATION</Link>
            </div>
            <div className="menu-item">
                <Link to="/LoginedInsfection">INSFECTION</Link>
            </div>
            <div id="loginheader">
                <Link to="/" className="my-page">LOGOUT</Link>
            </div>
        </nav>
    );
}

