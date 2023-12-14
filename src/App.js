
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import main from './mainPage/Main/main'




export default function App(){
  return(
    <div className='App'>
       <Routes>
         <Route path='/' exact Component={main} />
       </Routes>

    </div>
  )
}
 
 

  

 
 