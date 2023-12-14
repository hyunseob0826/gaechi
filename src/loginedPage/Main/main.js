import  './main.css' ;
import { useEffect, useState} from 'react';
import Mainpage from './mainPage';



export default function Main(props) {
  const username = props.username
  const mode = props.mode


  let content = null;
  content = <Mainpage username={username}></Mainpage>
return(
  <>
      <div className="background">
        {content}
      </div>
    </>
)

}


 
 

  

 
 