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
    <h1>HELLO</h1>
    <h1>반가워요.</h1>
    <h1>개발자들의 취업을 존중하고</h1>
    <h1>개발자의 성장을 돕는</h1>
    <h1>개취존중입니다.</h1>
   </div>
  </div>
  );
}
 
 

  

 
 