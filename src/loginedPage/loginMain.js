import  './main.css' ;
import Menu from '../menu';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



export default function Loginmain(props) {
   const [mode, setMode] = useState("");
   const username = props.username;
   const modes = props.mode;

   useEffect(() => {
    fetch("http://localhost:8000/authcheck")
      .then((res) => res.json())
      .then((json) => { 
        if(modes.length > 1){
          setMode(toString(modes));
        }
        else {
          setMode("LOGIN");
        }
        
      });
  }, []);
  console.log(modes)
  return(
  <div>
   <div id = "topcontainer">
    <div id = "title">
     <h1>개취존중</h1>
    </div>

    <div id = "menu-container">
      <h1>환영합니다! {username}님!</h1>
      <Menu/>
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


 
 

  

 
 