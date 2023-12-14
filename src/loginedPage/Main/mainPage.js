import  './main.css' ;
import Menu from '../menu';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



export default function Mainpage(props) {
   const usernamees = props.username;
   const [username, setUsername] = useState(usernamees);


   
    let content = null;
    
      content = <><Menu/><div id='username'>
        <h1>환영합니다 {username}님!</h1>
      </div></>
    
    
   
  return(
  <div>
   <div id = "topcontainer">
    <div id = "title">
     <h1>개취존중</h1>
    </div>

    <div id = "menu-container">
    {content}
    </div>
  
   </div>
   <span id = "main-middlecontainer" >
    <h1>HELLO</h1>
    <h1>반가워요.</h1>
    <h1>개발자들의 취업을 존중하고</h1>
    <h1>개발자의 성장을 돕는</h1>
    <h1>개취존중입니다.</h1>
   </span>
   <span>

   <img id='mainimg' src="main.PNG" alt="Main Image"  />

   

   </span>
  </div>
  );
  }


 
 

  

 
 