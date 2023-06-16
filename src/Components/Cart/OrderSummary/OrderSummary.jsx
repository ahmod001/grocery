import { Button } from '@mui/material';

const OrderSummary = () => {
    return (
        <div className='flex justify-center md:pt-16 '>
            <div className='sm:space-y-5 w-full max-w-[25rem] space-y-4'>
            {/* Title */}
            <h3 className='sm:text-xl text-lg sm:font-semibold font-bold tracking-wide'>Order Summary</h3>

            {/* Total Bill */}
            <table className='table-auto h-28 text-sm w-full'>
                <tbody>
                    {/* Subtotal */}
                    <tr className='font-medium text-gray-800'>
                        <td>Subtotal</td>
                        <td>$ 1200 USD</td>
                    </tr>
                    {/* Delivery Charge */}
                    <tr className='font-medium text-gray-800'>
                        <td>Delivery charge</td>
                        <td>$ 12 USD</td>
                    </tr>
                    {/* Total */}
                    <tr className='font-medium text-lg'>
                        <td>Total</td>
                        <td style={{color: 'green'}}>$ 1212 USD</td>
                    </tr>
                </tbody>
            </table>

            {/* Proceed to checkout */}
            <Button
                fullWidth
                // onClick={handlePlaceOrder}
                sx={{ textTransform: 'capitalize', display: 'block' }}
                variant='contained'
                color='success'>
                Proceed to checkout
            </Button>
        </div>
        </div>
    );
};

export default OrderSummary;