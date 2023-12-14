// Menu.js

import React from "react";
import { Link } from 'react-router-dom';
import './menu.css';
import Dropdown from "./Dropdown";

const DropDown = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  
    return (
      <div id = 'app'>
        
        <Link onClick = {e => setDropdownVisibility(!dropdownVisibility)}>COMMUNITY</Link>
        <Dropdown visibility = {dropdownVisibility}>
          <ul>
            <li>1.스터디 모임 공고</li>
            <li><Link to="/Community">2.개발자 커뮤니티</Link></li>
          </ul>
        </Dropdown>
      </div>
    )
};

const Menu = (props) => {
    console.log(props.match);

    return (
        <nav id="menu">
            <div className="menu-item">
                <Link to="/home">HOME</Link>
                
            </div>
            <div className="menu-item">
                <DropDown></DropDown>
            </div>
            <div className="menu-item">
                <Link to="/">INFOMATION</Link>
            </div>
            <div className="menu-item">
                <Link to="/Test211">INSPECTION</Link>
            </div>
            <div id="loginheader">
                <Link to="/loginpage">LOGIN</Link>
                <Link to="/mypage" className="my-page">MY PAGE</Link>
            </div>
        </nav>
    );
}

export default Menu;
