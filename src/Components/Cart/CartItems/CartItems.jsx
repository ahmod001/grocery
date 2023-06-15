import React from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';

const CartItems = () => {
    return (
        <div className='col lg:col-span-2 space-y-3.5 '>
            {/* Title */}
            <h2 className='sm:text-2xl text-lg sm:font-semibold font-bold '>Selected Items</h2>
            <CartItemCard />
        </div>
    );
};

export default CartItems;