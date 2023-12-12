import App from './App';
import Loginpage from './loginPage';
import Main from './main';
import Community from './community';
import Test211 from './Test211';
import {
    createBrowserRouter
} from "react-router-dom";
import Home from './appHome';



const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,

    },
    {
        path: "/loginpage",
        element: <Loginpage/>

    },
    {
        path: "/Community",
        element: <Community/>

    },
    {
        path: "/Test211",
        element: <Test211/>
    },
    {
        path: "/home",
        element: <Home />
    },
]);

export default routes;