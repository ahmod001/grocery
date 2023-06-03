import { } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { Fade } from '@mui/material';

const Layout = () => {

    return (
        <Fade in={true}>
            <main>
                <Navbar />
                <Outlet />
            </main>
        </Fade>
    );
};

export default Layout;