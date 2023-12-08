import App from './App';
import Loginpage from './loginPage';
import Main from './main';
import Community from './community';
import {
    createBrowserRouter
} from "react-router-dom";

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
]);

export default routes;