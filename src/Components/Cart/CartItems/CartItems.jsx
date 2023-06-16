import React from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';

const CartItems = () => {
    return (
        <div className='col xl:col-span-2 col lg:space-y-6 space-y-3.5'>
            {/* Title */}
            <h2 className='lg:text-2xl sm:text-xl text-lg sm:font-semibold font-bold '>
                Selected Items
            </h2>

            {/* Items Card list */}
            <div className='space-y-3'>
                {
                    Array.from({ length: 8 }).map(cartItem => (
                        <CartItemCard key={cartItem} />
                    ))
                }
            </div>
        </div>
    );
};

export default CartItems;