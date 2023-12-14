import App from './App';
import Login from './mainPage/login/login';
import Community from './mainPage/communityLib/community';
import {
    createBrowserRouter
} from "react-router-dom";
import Main from './mainPage/Main/main'
import Information from './mainPage/Infomation/Information';
import LoginedInfromaion from'./loginedPage/Information/Information';
import LoginedMain from './loginedPage/Main/main'
import LoginedCommunity from './loginedPage/communityLib/community'
import MeetupForm from './mainPage/communityLib/MeetupForm';
import Home from './appHome';



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,

    },
    {
        path: "/login",
        element: <Login/>

    },
    {
        path: "/Community",
        element: <Community/>

    },
    {
        path: "/Information",
        element: <Information/>

    },
    {
        path: "/LoginedMain",
        element: <LoginedMain/>,

    },
    {
        path: "/Logout",
        element: <Login/>

    },
    {
        path: "/LoginedCommunity",
        element: <LoginedCommunity/>

    },
    {
        path: "/LofinedInformation",
        element: <LoginedInfromaion/>

    },
    {
        path: "/study",
        element:<MeetupForm />
    },
    {
        path: "/home",
        element:<Home />
    }
]);

export default routes;