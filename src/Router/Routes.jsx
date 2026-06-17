import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Roots from '../Roots/Roots'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import PetSupply from '../Pages/PetSupply'
import AddListing from '../Pages/AddListing'
import MyListings from '../Pages/MyListings'
import MyOrders from '../Pages/MyOrders'
import ErrorPage from '../Pages/ErrorPage'
import Details from '../Pages/Details'
import PrivateRoute from '../Context/PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/pet&supply',
        element: <PetSupply />,
      },
      {
        path: '/addlisting',
        element: <AddListing />,
      },
      {
        path: '/mylistings',
        element: <MyListings />,
      },
      {
        path: '/myorders',
        element: <MyOrders />,
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
    ],
  },
]);