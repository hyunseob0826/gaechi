import App from './App';
import Login from './login/login';
import Community from './communityLib/community';
import {
    createBrowserRouter
} from "react-router-dom";
import Main from './mainLib/main'
import Information from './Information';



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,

    },
    {
        path: "/loginpage",
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
]);

export default routes;