import { Button, Fade, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import { groceryContext } from '../../Layout/Layout';
import { useContext, useState } from 'react';
import GoBackButton from '../GoBackButton/GoBackButton';
import { handleSessionStorage } from '../../../utils/utils';
import PopUpDialog from '../../PopUpDialog/PopUpDialog';
import { useNavigate } from 'react-router-dom';

const DeliveryForm = () => {
    const { cartItemsState } = useContext(groceryContext);
    const [cartItems, setCartItems] = cartItemsState;
    const [openDialog, setOpenDialog] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()

    // Handle PlaceOrder
    const onSubmit = (data) => {
        setOpenDialog(!openDialog)
        // Setting DeliveryDetails in Storage
        handleSessionStorage('set', 'deliveryDetails', data)
    }
    // Handle Dialog 
    const handleOK = () => {
        // Reset the Cart_items
        handleSessionStorage('remove', 'cartItems')
        setCartItems([])
        setOpenDialog(!openDialog)
        navigate('/')
    }

    return (
        <>
            <PopUpDialog
                open={openDialog}
                message={'Order Placed successfully'}
                handleOk={handleOK}
                placeOrder={true} />
            <div className='md:mx-0 mx-auto space-y-4 max-w-[37rem]'>
                {/* Go back Btn */}
                <GoBackButton />
                <div className='space-y-9 lg:space-y-10 '>
                    {/* Title */}
                    <h1 className='lg:text-2xl text-xl font-semibold text-gray-600'>
                        Complete Delivery Details
                    </h1>

                    {/* Delivery Form */}
                    <Fade in={true}>
                        <form action="post"
                            className='lg:space-y-8  space-y-7'
                            onSubmit={handleSubmit(onSubmit)} >
                            {/* Full */}
                            <TextField
                                {...register('full_name', {
                                    required: 'Name is required',
                                })}
                                defaultValue={'John Doe'}
                                label='Full Name'
                                size='small'
                                error={errors.email ? true : false}
                                helperText={errors.email ? errors.email.message : ''}
                                fullWidth
                                color='success'
                                variant='outlined' />

                            {/* Email */}
                            <TextField
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern:
                                    {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                defaultValue={'john@gmail.com'}
                                label='Email'
                                size='small'
                                error={errors.email ? true : false}
                                helperText={errors.email ? errors.email.message : ''}
                                fullWidth
                                color='success'
                                variant='outlined' />

                            {/* Address */}
                            <TextField
                                {...register('address', {
                                    required: 'Address is required',
                                })}
                                defaultValue={'456 Street, fake town, New York'}
                                label='Address'
                                size='small'
                                error={errors.address ? true : false}
                                helperText={errors.address ? errors.address.message : ''}
                                fullWidth
                                placeholder='street, city, state'
                                color='success'
                                variant='outlined' />

                            {/* Submit Button */}
                            <Button type='submit'
                                fullWidth
                                variant='contained'
                                sx={{ textTransform: 'capitalize' }}
                                color='success'>
                                Place Order
                            </Button>
                        </form>
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default DeliveryForm;