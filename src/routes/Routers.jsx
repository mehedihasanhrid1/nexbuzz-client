import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../components/Errorpage";
import Home from "../pages/home/Home";

const routers = createBrowserRouter(
    [
        {
            path:'/',
            element: <Root/>,
            errorElement:<ErrorPage/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                }
            ]
        }
    ]
);

export default routers;