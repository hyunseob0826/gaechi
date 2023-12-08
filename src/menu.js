import React from "react";
import { Link } from 'react-router-dom';

const Menu = (props) => {
    console.log(props.match);

    return(
      <nav id = "menu">
       <div>
       <Link to="/" >HOME |</Link>
       </div>
       <div>
       <Link to="/Community" >COMMUNITY |</Link>
       </div>
       <div>
       <Link to="/" >INFOMATION |</Link>
       </div>
       <div>
       <Link to="/" >INSPECTION |</Link>
       </div>
       <div>
       <Link to="/loginpage" >LOGIN</Link>
       </div>
      </nav>
    )
}

export default Menu;