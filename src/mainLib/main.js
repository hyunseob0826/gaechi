import  './main.css' ;
import { useEffect, useState} from 'react';
import Mainpage from './mainPage';
import LoginMain from './loginMain'



export default function Main() {
  const [mode, setMode] = useState("")
  const [password, setpassword] = useState("")

  useEffect(() => {
    fetch("http://localhost:8000/authcheck")
      .then((res) => res.json())
      .then((json) => {        
        if (json.isLogin === "True") {
          setMode("WELCOME");
          setpassword(json.password)
        }
        else {
          setMode("LOGIN");
        }
      });
  }, []); 

  let content = null;

  if(mode==="LOGIN"){
    content = <Mainpage setmode={setMode}></Mainpage>
  }else if (mode === 'WELCOME') {
    content = <LoginMain setmode={setMode}></LoginMain>
  }
  console.log(password);
return(
  <>
      <div className="background">
        {content}
      </div>
    </>
)

}


 
 

  

 
 