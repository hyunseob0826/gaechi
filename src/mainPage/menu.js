// Menu.js

import React from "react";
import { Link } from 'react-router-dom';
import './menu.css';
import Dropdown from '../Dropdown';

const DropDown = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  
    return (
      <div id = 'app'>
        
        <Link onClick = {e => setDropdownVisibility(!dropdownVisibility)}>COMMUNITY</Link>
        <Dropdown visibility = {dropdownVisibility}>
          <ul>
            <li><Link to="/study">1.스터디 모임 공고</Link></li>
            <li><Link to="/Community">2.개발자 커뮤니티</Link></li>
          </ul>
        </Dropdown>
      </div>
    )
};

export default function Menu() {

    return (
        <nav id="menu">
            <div className="menu-item">
                <Link to="/home">HOME</Link>
            </div>
            <div className="menu-item">
                <DropDown></DropDown>
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

