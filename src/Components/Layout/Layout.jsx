import { } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { Fade } from '@mui/material';
import Footer from '../Footer/Footer';

const Layout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;