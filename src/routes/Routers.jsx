import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";

const routers = createBrowserRouter(
    [
        {
            path:'/',
            element: <Root/>
        }
    ]
);

export default routers;