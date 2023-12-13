// Menu.js

import React from "react";
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = (props) => {

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
                <Link to="/loginpage">LOGIN</Link>
                <Link to="/mypage" className="my-page">MY PAGE</Link>
            </div>
        </nav>
    );
}

export default Menu;
