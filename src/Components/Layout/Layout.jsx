import { Outlet } from "react-router-dom";
import Navbar, { userLoggedIn } from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { createContext, useState } from "react";

export const groceryContext = createContext();
const Layout = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(userLoggedIn);

    return (
        <groceryContext.Provider value={{
            userLoggedInState: [isUserLoggedIn, setIsUserLoggedIn],
        }}>
            <Navbar />
            <section className="min-h-screen">
                <Outlet />
            </section>
            <Footer />
        </groceryContext.Provider>
    );
};

export default Layout;