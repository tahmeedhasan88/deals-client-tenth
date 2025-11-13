import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Roots from "../Roots/Roots";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PetSupply from "../Pages/PetSupply";
import AddListing from "../Pages/AddListing";
import MyListings from "../Pages/MyListings";
import MyOrders from "../Pages/MyOrders";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Pages/Details";
import PrivateRoute from "../Context/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage> ,
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
        {
         path:"/pet&supply",
         element: <PetSupply></PetSupply>

        },
        {
         path:"/addlisting",
         element: <AddListing></AddListing>,
         loader: ()=> fetch("http://localhost:3000/products")

        },
        {
         path:"/mylistings",
         element: <MyListings></MyListings>

        },
        {
         path:"/myorders",
         element: <MyOrders></MyOrders>

        },
        {
         path:"/details/:id",
         element: <PrivateRoute><Details></Details></PrivateRoute>,
         loader: ()=> fetch("http://localhost:3000/products")

        },




    ]
  },
]);