import  './main.css' ;
import Menu from '../menu';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';



export default function Mainpage(props) {
   const username = props.username;
   const [mode, setMode] = useState("");


   
    console.log(mode);
    let content = null;
    
      content = <Menu></Menu>
    
   
  return(
  <div>
   <div id = "topcontainer">
    <div id = "title">
     <h1>개취존중</h1>
    </div>

    <div id = "menu-container">
    {content}
    </div>

    <div>
      <h1></h1>
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


 
 

  

 
 