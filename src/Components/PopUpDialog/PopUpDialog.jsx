import { forwardRef } from 'react';
import { Button, Dialog, Fade, Grow, useMediaQuery } from "@mui/material";
import { Check } from '@mui/icons-material';

const PopUpDialog = ({ open, message, handleRemove, handleCancel, handleOk, placeOrder }) => {
    // Media Query
    const isExtraSmallScreen = useMediaQuery('(max-width:640px)')
    return (
        <Dialog
            TransitionComponent={transition}
            open={open}
            onClose={handleCancel}>
            <div className={`lg:w-96 ${placeOrder ? 'sm:h-56 h-[12.5rem]' : 'h-[9rem] sm:h-[11.5rem]'} sm:w-[20rem] w-[17.5rem] items-center flex justify-center text-center`}>
                <div className={!placeOrder ? 'sm:space-y-11 space-y-8' : 'md:space-y-9 space-y-7'}>
                    <div className='space-y-5'>
                        {placeOrder &&
                            // PlaceOrder Successful Animation
                            <div className='sm:text-6xl text-5xl'>
                                <Grow in={true}>
                                    <Check
                                        color='success'
                                        fontSize='inherit' />
                                </Grow>
                            </div>
                        }
                        {/* Massage */}
                        <h3 className={`${!placeOrder ? 'sm:text-lg' : 'text-base'} capitalize font-semibold text-gray-700`}>
                            {message}
                        </h3>
                    </div>

                    {/* Dialog Actions */}
                    <div className='flex justify-center space-x-4 sm:space-x-5 lg:space-x-6'>
                        {placeOrder ?
                            // Ok btn
                            <Button
                                sx={{ textTransform: 'capitalize' }}
                                color='success'
                                onClick={handleOk}
                                size={isExtraSmallScreen ? 'small' : 'medium'}
                                variant='contained'>
                                Ok
                            </Button>
                            : <>
                                {/* Cancel Btn*/}
                                <Button
                                    sx={{ textTransform: 'capitalize' }}
                                    color='inherit'
                                    size={isExtraSmallScreen ? 'small' : 'medium'}
                                    onClick={handleCancel}>
                                    Cancel
                                </Button>
                                {/* Remove Btn */}
                                <Button
                                    sx={{ textTransform: 'capitalize' }}
                                    color='success'
                                    onClick={handleRemove}
                                    size={isExtraSmallScreen ? 'small' : 'medium'}
                                    variant='contained'>
                                    Remove
                                </Button>
                            </>}
                    </div>
                </div>
            </div>

        </Dialog>
    );
};

// This sub_component will add Transition on the dialog
const transition = forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
});
export default PopUpDialog;