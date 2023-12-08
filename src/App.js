
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import main from './main'
import loginPage from './loginPage';




export default function App(){
  return(
    <div className='App'>
       <Routes>
         <Route path='/' exact Component={main} />

       </Routes>

    </div>
  )
}
 
 

  

 
 