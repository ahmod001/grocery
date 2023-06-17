import { useNavigate } from "react-router-dom";
import EmptyCart from './EmptyCart/EmptyCart';
import { Container, Fade } from "@mui/material";
import { createContext, useContext, useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import CartItems from "./CartItems/CartItems";
import { groceryContext } from "../Layout/Layout";

export const checkoutContext = createContext();
const Cart = () => {
    // Scrolling Bug Fixed
    window.scroll({ top: 0 });

    // Get Cart Items from Context
    const { cartItemsState } = useContext(groceryContext);
    const [cartItems, setCartItems] = cartItemsState;

    const [isProceedToCheckout, setIsProceedToCheckout] = useState(false);

    return (
        <checkoutContext.Provider value={[isProceedToCheckout, setIsProceedToCheckout]}>
            <section className={`${cartItems.length > 0 ? 'min-h-screen ' : 'h-screen '}pt-20 pb-10`}>
                {cartItems.length > 0 ?
                    <Container sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                        <section className="grid lg:gap-x-0 gap-x-5 gap-y-6 w-full xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-12 ">
                            {
                                !isProceedToCheckout?
                                <CartItems />
                                :<></>
                            }
                            <OrderSummary />
                        </section>
                    </Container>

                    : <EmptyCart />
                }
            </section>
        </checkoutContext.Provider>
    );
};

export default Cart;