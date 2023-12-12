import React from "react";
import {Link} from 'react-router-dom';
import './appHome.css';
import Menu from './menu'

const Home = (props) => {
    console.log(props.match);

    return(
        <div>
            <div className = "header-bar">
                <a className = "logo" href ="/">개취존중</a>
            </div>

            <Menu></Menu>
          </div>
    )
}

export default Home;