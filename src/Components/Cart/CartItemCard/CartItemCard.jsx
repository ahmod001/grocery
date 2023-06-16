import { Button, Fade, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import boi from '../../../assets/premium_qualityMan.png'
import { Add, Remove } from "@mui/icons-material";
import { useState } from 'react';

const CartItemCard = () => {
    return (
        <Fade in={true}>
            <div className='grid max-w-[40rem] mx-auto py-2.5 px-3 lg:grid-cols-5 grid-cols-5 lg:gap-x-2.5 gap-x-2 rounded-md w-full bg-gray-100/80'>
                {/*Img */}
                <div className='col flex items-center justify-center'>
                    <img
                        src={boi}
                        className='lg:h-20 h-14'
                        alt={''} />
                </div>

                <div className='col-span-2 overflow-hidden pt-2'>
                    <div className=' overflow-hidden lg:space-y-2 space-y-0.5'>
                        {/* Name */}
                        <h4 className='font-semibold lg:max-h-none max-h-10 overflow-hidden lg:text-gray-700 text-sm'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h4>

                        {/* Description */}
                        <h6 className='text-justify text-xs text-gray-700'>
                            Best Quality
                        </h6>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='lg:space-y-1 space-y-0.5'>
                        {/*Total Price */}
                        <h3 className='font-semibold sm:text-base text-sm text-green-600'>
                            $ 120</h3>

                        {/* Remove-Item btn */}
                        <div className='text-center'>
                            <Tooltip
                                sx={{ fontSize: '1px' }}
                                title='remove'
                                placement='left'>
                                <IconButton
                                    sx={{ textTransform: 'capitalize', opacity: 0.7 }}
                                    color='inherit'
                                    size='small'>
                                    <DeleteIcon fontSize='inherit' />
                                </IconButton>
                            </Tooltip>
                        </div>

                    </div>
                </div>

                {/* Item Quantity Control */}
                <div className='flex items-center justify-center'>
                    <QuantityController />
                </div>
            </div>
        </Fade>
    );
};

// Quantity Controller
const QuantityController = () => {
    const [quantity, setQuantity] = useState(1);

    // Event Handlers
    const handleReduce = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }
    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }

    return (
        <div className={'flex items-center justify-center my-auto lg:space-x-2.5 space-x-1'}>

            {/* Reduce Quantity */}
            <IconButton
                size={'small'}
                disabled={quantity < 2}
                onClick={handleReduce}
            >
                <Remove fontSize='inherit' />
            </IconButton>

            {/* Current Quantity*/}
            <h1 className={'my-auto lg:text-xl lg:font-medium font-semibold text-gray-700 whitespace-nowrap'}>
                {quantity}<span className='lg:text-sm text-xs'> kg</span>
            </h1>

            {/* Increase Quantity */}
            <IconButton
                size={'small'}
                onClick={handleIncrement}
                color='success'>
                <Add fontSize='inherit' />
            </IconButton>
        </div>
    )
}

export default CartItemCard;