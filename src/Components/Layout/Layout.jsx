import { } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { Fade } from '@mui/material';
import Footer from '../Footer/Footer';

const Layout = () => {

    return (
        <Fade in={true}>
            <main>
                <Navbar />
                <Outlet />
                <Footer />
            </main>
        </Fade>
    );
};

export default Layout;