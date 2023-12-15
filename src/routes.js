import App from './App';
import Login from './mainPage/login/login';
import Community from './mainPage/communityLib/community';
import Insfection from './mainPage/Ctf'
import {
    createBrowserRouter
} from "react-router-dom";
import Main from './mainPage/Main/main'
import Information from './mainPage/Infomation/Information';
import LoginedInfromaion from'./loginedPage/Information/Information';
import LoginedMain from './loginedPage/Main/main'
import LoginedCommunity from './loginedPage/communityLib/community'
import LoginedInsfection from './loginedPage/Ctf'



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
        path: "/Insfection",
        element: <Insfection/>

    },
    {
        path: "/LoginedMain",
        element: <LoginedMain/>,

    },
    {
        path: "/Login",
        element: <Login/>

    },
    {
        path: "/LoginedInsfection",
        element: <LoginedInsfection/>

    },
    {
        path: "/LoginedCommunity",
        element: <LoginedCommunity/>

    },
    {
        path: "/LofinedInformation",
        element: <LoginedInfromaion/>

    },
]);

export default routes;