import  './loginPage.css' ;
import { Component, useState, useEffect } from 'react';
import Loginpage from './loginPage';
import LoginMain from '../mainLib/loginMain'




export default function Login() {
  const [mode, setMode] = useState("");

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

  if(mode==="LOGIN"){
    console.log('로그인되었음')
    content = <Loginpage setMode={setMode} ></Loginpage>
  }
  else if (mode === 'WELCOME') {
    content = content = <LoginMain setmode={setMode}></LoginMain>
  }

  return (
    <>
      <div className="background">
        {content}
      </div>
    </>
  );
}