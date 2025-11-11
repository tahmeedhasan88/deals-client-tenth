import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Roots from "../Roots/Roots";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
       
        {
         path:"/",
         element: <Home></Home>

        },



    ]
  },
]);