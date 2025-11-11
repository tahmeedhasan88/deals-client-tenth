import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Roots from "../Roots/Roots";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
       
        {
         path:"/",
         element: <Home></Home>

        },
        {
         path:"/login",
         element: <Login></Login>

        },
        {
         path:"/register",
         element: <Register></Register>

        },




    ]
  },
]);