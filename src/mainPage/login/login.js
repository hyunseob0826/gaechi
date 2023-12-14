import  './loginPage.css' ;
import { Component, useState, useEffect } from 'react';
import Loginpage from './loginPage';
import Main from '../Main/main';
import Loginmain from '../../loginedPage/Main/mainPage';




export default function Login() {
  const [mode, setMode] = useState("");
  const [username, setUsername] = useState("초기값");

  useEffect(() => {
    fetch("http://localhost:8000/authcheck")
      .then((res) => res.json())
      .then((json) => { 
        if (json.isLogin === "True") {
          setMode("WELCOME");
        }
        else {
          setMode("LOGIN");
        }
        
      });
  }, []); 
  let content = null;  
  console.log(mode)
  if(mode==="LOGIN"){
    content = <Loginpage setMode={setMode} setUsername={setUsername} ></Loginpage>
  }
  else if (mode === 'WELCOME') {
    content = <Loginmain mode={mode} username={username}></Loginmain>
  }

  return (
    <>
      <div className="background">
        {content}
      </div>
    </>
  );
}