
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import main from './mainPage/Main/main';


export default function App(){
  const [meetups, setMeetups] = useState([]);

  const addMeetup = (meetup) => {
    setMeetups((prevMeetups) => [...prevMeetups, meetup]);
  };

  return(
    <div className='App'>
       <Routes>
         <Route path='/' exact Component={main} />

       </Routes>

    </div>
  )
}
 



  

 
 