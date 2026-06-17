import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../Components/Loading'

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

const location = useLocation()
// console.log(location)


    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
      return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;



    
};

export default PrivateRoute;