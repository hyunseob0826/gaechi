import  './App.css' ;
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';



export default function App(){
  const [number, setNumber] = useState(1);

  return(
  <div>
   <div id = "topcontainer">
    <div id = "title">
     <h1>개취존중</h1>
    </div>

    <div id = "menu-container">
      <div>
        <h1 >HOME |</h1>
      </div>

      <div>
        <h1>COMMUNITY |</h1>
      </div>

      <div>
        <h1>INFOMATION |</h1>
      </div>
      
      <div>
        <h1>COMMUNITY |</h1>
      </div>
      <div>
        <h1>INSPECTION</h1>
      </div>

      <div>
        <button>Log In</button>
      </div>
    </div>
  
   </div>
   <div id = "middlecontainer">
    <div id = "mainText">
     <h1>HELLO</h1>
     <h1>반가워요.</h1>
     <h1>개발자들의 취업을 존중하고</h1>
     <h1>개발자의 성장을 돕는</h1>
     <h1>개취존중입니다.</h1>
    </div>
    <div id = "login">
     <div id = "loginTab">
      <div id = "loginMenu">
        <h1>로그인</h1>
      </div>
      <div id = "loginJoin">
        <h1>회원가입</h1>
      </div>
     </div>

     <div id = "email">
      <div id = "emailTitle">
        <h1>이메일</h1>
      </div>
      <div id = "emailBox">
        <from>
          <input id = "emailText" type='text' name = 'email_name' />
        </from>
      </div>
     </div>

     <div id = "password">
      <div id = "paswordMenu">
       <div id = "passwordTitle">
         <h1>비밀번호</h1>
       </div>
       <div id = "passwordReset">
        <h1>비밀번호 재설정</h1>
       </div>
      </div>
      <div id = "passwordBox">
       <form>
         <input id = "passwordText" type='text' name = 'password_name' />
       </form>
       </div>
     </div>
     <div id = "loginButton">
      <button>로그인</button>
     </div>
    </div>
   </div>
  </div>
  );
}
 
 

  

 
 