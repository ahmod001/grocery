import { useNavigate } from "react-router-dom";
import EmptyCart from './EmptyCart/EmptyCart';
import { Container, Fade } from "@mui/material";
import { useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import CartItems from "./CartItems/CartItems";

const Cart = () => {
    // Scrolling Bug Fixed
    window.scroll({ top: 0 });
    const [isCartEmpty, setIsCartEmpty] = useState(false)
    const navigate = useNavigate();

    return (
        <section className='min-h-screen pt-20 pb-10'>

            {
                !isCartEmpty ?
                    // Main Layout
                    <Container sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                        <section className="grid gap-x-3 gap-y-5 w-full xl:grid-cols-3 lg:grid-cols-2 ">
                            <CartItems />
                            <OrderSummary />
                        </section>
                    </Container>

                    // If the cart is empty this component will show
                    : <EmptyCart />
            }
        </section>
    );
};

export default Cart;