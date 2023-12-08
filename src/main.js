import  './main.css' ;
import Menu from './menu';
import { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { Link } from 'react-router-dom';



class Main extends Component {

  render() {
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
   <div id = "main-middlecontainer">
    <h1>HELLO</h1>
    <h1>반가워요.</h1>
    <h1>개발자들의 취업을 존중하고</h1>
    <h1>개발자의 성장을 돕는</h1>
    <h1>개취존중입니다.</h1>
   </div>
  </div>
  );
  }
}

export default Main;
 
 

  

 
 