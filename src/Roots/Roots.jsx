import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const Roots = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;