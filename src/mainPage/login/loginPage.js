import  './loginPage.css' ;
import { Component, useState, useEffect } from 'react';
import Menu from '../menu';
import axios from 'axios';
import Login from './login';




export default function Loginpage(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  

  return(
  <div>
   <div id = "topcontainer">
    <div id = "title">
     <h1>개취존중</h1>
    </div>

    <div id = "menu-container">
      <Menu/>
    </div>
  
   </div>
   <div id = "middlecontainer">
    <span id = "mainText">
     <h1>HELLO</h1>
     <h1>반가워요.</h1>
     <h1>개발자들의 취업을 존중하고</h1>
     <h1>개발자의 성장을 돕는</h1>
     <h1>개취존중입니다.</h1>
    </span>
    <div id = "login">
      <div id = "loginMenu">
        <h1>로그인</h1>

     </div>

     <div id = "email">
      <div id = "emailTitle">
        <h1>아이디</h1>
      </div>
      <div id = "emailBox">
        <p>
          <input id = "emailText" type='text' name = 'email_name'  placeholder="아이디" onChange={event => {
            setId(event.target.value);
          }} />
        </p>
      </div>
     </div>

     <div id = "password">
      <div id = "paswordMenu">
       <div id = "passwordTitle">
         <h1>비밀번호</h1>
       </div>
      </div>
      <div id = "passwordBox">
       <p>
         <input id = "passwordText" type='text' name = 'password_name' placeholder="비밀번호" onChange={event => {
          setPassword(event.target.value);
        }}/>
       </p>
       </div>
     </div>
     <div id = "loginButton">
      <p ><input id="btn" type="submit" value="로그인" onClick={() => {
        const userData = {
          userId: id,
          userPassword: password,
        };
        fetch("http://localhost:8000/login", { //auth 주소에서 받을 예정
          method: "post", // method :통신방법
          headers: {      // headers: API 응답에 대한 정보를 담음
            "content-type": "application/json",
          },
          body: JSON.stringify(userData), //userData라는 객체를 보냄
        })
          .then((res) => res.json())
          .then((json) => {            
            if(json.isLogin==="True"){
              console.log(json)
              props.setMode("WELCOME");
              props.setUsername(json.nickname)
            }
            else {
              alert(json.isLogin)
            }
          });
      }} /></p>
     </div>
    </div>
   </div>
  </div>
  );
  }

 
 

  

 
 